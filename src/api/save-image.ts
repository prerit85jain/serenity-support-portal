import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const imageData = req.body.get('image');
    if (!imageData) {
      return res.status(400).json({ message: 'No image data provided' });
    }

    // Create images directory if it doesn't exist
    const imagesDir = join(process.cwd(), 'public', 'captured-images');
    if (!existsSync(imagesDir)) {
      await mkdir(imagesDir, { recursive: true });
    }

    const imagePath = join(imagesDir, 'current-image.jpg');
    await writeFile(imagePath, imageData);

    console.log('Image saved to:', imagePath);

    return res.status(200).json({ 
      message: 'Image saved successfully',
      imagePath: '/captured-images/current-image.jpg'
    });
  } catch (error) {
    console.error('Error saving image:', error);
    return res.status(500).json({ message: 'Error saving image' });
  }
} 