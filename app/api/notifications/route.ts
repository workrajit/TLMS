// app/api/notifications/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { verifyToken } from '@/utils/auth';
import { db } from '@/lib/db';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  const user = verifyToken(authHeader);
  if (!user) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

  const notifications = await db.notification.findMany({
    where: { userId: user },
  });
  return NextResponse.json(notifications);
}

export async function POST(request: Request) {
  // This route is typically for sending notifications (by an admin or system process)
  const authHeader = request.headers.get('authorization');
  const user = verifyToken(authHeader);
  if (!user) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

  const body = await request.json();
  const { userId, message, type } = body;

  const notification = await db.notification.create({
    data: {
      userId,
      message,
      type,
    },
  });
  return NextResponse.json({ success: true, notification }, { status: 201 });
}
