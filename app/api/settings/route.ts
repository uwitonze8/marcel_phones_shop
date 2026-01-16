import { NextRequest, NextResponse } from 'next/server';
import { db, Settings } from '@/lib/db';

// GET /api/settings - Get settings
export async function GET() {
  try {
    const settings = db.findAll<Settings>('settings');
    // Return the first (and only) settings object
    const settingsData = settings.length > 0 ? settings[0] : null;

    if (!settingsData) {
      return NextResponse.json(
        { success: false, error: 'Settings not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: settingsData });
  } catch (error) {
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

    // Get existing settings
    const settings = db.findAll<Settings>('settings');
    const settingsId = settings.length > 0 ? settings[0].id : 'settings_default';

    // Update settings
    const updatedSettings = db.update<Settings>('settings', settingsId, body);

    if (!updatedSettings) {
      return NextResponse.json(
        { success: false, error: 'Failed to update settings' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updatedSettings });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update settings' },
      { status: 500 }
    );
  }
}
