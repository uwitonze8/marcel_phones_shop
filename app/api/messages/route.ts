import { NextRequest, NextResponse } from 'next/server';
import { db, Message } from '@/lib/db';

// GET /api/messages - Get all messages
export async function GET() {
  try {
    const messages = db.findAll<Message>('messages');
    return NextResponse.json({ success: true, data: messages });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}

// POST /api/messages - Create a new message (contact form submission)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newMessage: Message = {
      id: `msg_${Date.now()}`,
      name,
      email,
      phone: phone || '',
      subject,
      message,
      status: 'Unread',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const savedMessage = db.create<Message>('messages', newMessage);
    return NextResponse.json({ success: true, data: savedMessage }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
