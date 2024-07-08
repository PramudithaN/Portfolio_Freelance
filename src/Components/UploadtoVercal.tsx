import { put } from "@vercel/blob";

async function uploadToVercelBlob() {
  try {
    const { url } = await put('articles/blob.txt', 'Hello World!', { access: 'public' });

    console.log(`File uploaded successfully. URL: ${url}`);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

// Call the upload function wherever necessary
uploadToVercelBlob();
