import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { prisma } from '@/lib/prisma';
import { put } from '@vercel/blob';

export async function GET() {
  try {
    const { userId } = auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const documents = await prisma.document.findMany({
      where: {
        userId
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(documents);
  } catch (error) {
    console.error('Error fetching documents:', error);
    return NextResponse.json(
      { error: 'Error fetching documents' }, 
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File;
    const category = formData.get('category') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' }, 
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only PDF and Word documents are allowed.' }, 
        { status: 400 }
      );
    }

    // Upload to Vercel Blob
    const blob = await put(file.name, file, {
      access: 'public',
    });

    const document = await prisma.document.create({
      data: {
        name: file.name,
        type: file.type.includes('pdf') ? 'PDF' : 'DOC',
        size: file.size,
        url: blob.url,
        category: category || 'OTHER',
        userId
      }
    });

    return NextResponse.json(document, { status: 201 });
  } catch (error) {
    console.error('Error uploading document:', error);
    return NextResponse.json(
      { error: 'Error uploading document' }, 
      { status: 500 }
    );
  }
}