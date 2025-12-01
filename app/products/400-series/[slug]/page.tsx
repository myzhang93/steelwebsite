export default async function ProductDetail({ params }: { params: { slug: string } }) {
  console.log(params.slug); // 确保这是正确的 slug

  try {
    const res = await fetch(`https://lynsteel.com/wp-json/wp/v2/zzproduct?slug=${params.slug}`);
    if (!res.ok) {
      console.error('Failed to fetch data:', res.status);
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    console.log(data); // 确保数据结构正确

    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/products/400-series" className="text-blue-600 mb-4 inline-block">← 返回列表</Link>
        <h1 className="text-4xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: data.title.rendered }} />
        <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
      </div>
    );
  } catch (error) {
    console.error('Error:', error);
    return <div className="max-w-4xl mx-auto px-6 py-16">Failed to load data</div>;
  }
}