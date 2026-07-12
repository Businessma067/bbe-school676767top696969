create or replace function public.match_book_chunks(
  query_embedding vector(1536),
  match_count int default 6
)
returns table (
  id uuid,
  content text,
  chunk_index int,
  similarity float
)
language sql stable
security invoker
set search_path = public
as $$
  select
    d.id,
    d.content,
    d.chunk_index,
    1 - (d.embedding <=> query_embedding) as similarity
  from public.book_chunks d
  order by d.embedding <=> query_embedding
  limit match_count;
$$;