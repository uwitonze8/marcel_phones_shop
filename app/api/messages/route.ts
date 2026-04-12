import { NextRequest, NextResponse } from 'next/server';
import { db, Message } from '@/lib/supabase';
import { normalizeMessage } from '@/lib/normalize';

// GET /api/messages - Get all messages
export async function GET() {
  try {
    const messages = await db.findAll<Message>('messages');
    return NextResponse.json({ success: true, data: messages.map(normalizeMessage) });
  } catch (error) {
    console.error('Error fetching messages:', error);
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

    const newMessage = {
      id: `msg_${Date.now()}`,
      name,
      email,
      phone: phone || '',
      subject,
      message,
      status: 'Unread' as const,
    };

    const savedMessage = await db.create<Message>('messages', newMessage);
    if (!savedMessage) {
      return NextResponse.json(
        { success: false, error: 'Failed to send message' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ success: true, data: normalizeMessage(savedMessage) }, { status: 201 });
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
