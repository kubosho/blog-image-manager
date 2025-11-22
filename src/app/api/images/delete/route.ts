import { objectActions } from '../../../../features/bucket/object-actions';

export async function DELETE(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);

  const filename = searchParams.get('filename');
  if (filename === '' || filename == null) {
    return Response.json({ message: 'filename is required.' }, { status: 400 });
  }

  try {
    const result = await objectActions.deleteObject({ filename });
    if ('message' in result) {
      return Response.json({ message: result.message }, { status: 500 });
    }

    return new Response(null, { status: 204 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: `Delete failed: ${error.message}` }, { status: 500 });
    }

    return Response.json({ message: 'Delete failed due to an unexpected error.' }, { status: 500 });
  }
}
