import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((c) => c.id === parseInt(id));
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const updatedData = await request.json();
  const commentIndex = comments.findIndex((c) => c.id === parseInt(id));
  comments[commentIndex].text = updatedData.text;
  return new Response(JSON.stringify(comments[commentIndex]), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const commentIndex = comments.findIndex((c) => c.id === parseInt(id));
  const deletedComment = comments.splice(commentIndex, 1);
  return Response.json(deletedComment);
}
