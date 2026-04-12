import { NextRequest, NextResponse } from 'next/server';
import { db, Settings } from '@/lib/supabase';
import { normalizeSettings } from '@/lib/normalize';

// GET /api/settings - Get settings
export async function GET() {
  try {
    const settingsData = await db.getSettings();

    if (!settingsData) {
      return NextResponse.json(
        { success: false, error: 'Settings not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: normalizeSettings(settingsData) });
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch settings' },
      { status: 500 }
    );
  }
}

// PUT /api/settings - Update settings
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();

    const updatedSettings = await db.updateSettings(body);

    if (!updatedSettings) {
      return NextResponse.json(
        { success: false, error: 'Failed to update settings' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: normalizeSettings(updatedSettings) });
  } catch (error) {
    console.error('Error updating settings:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update settings' },
      { status: 500 }
    );
  }
}
