import NewsDetailsPage from "@/components/PageComponent/NewsDetailsPage";
import RelatedList from "@/components/RelatedList";
import "@/styles/news-events.css";
import client from "@/tina/__generated__/client";
import Image from "next/image";

async function NewsDetails({params: {slug}}) {
  const result = await client.queries.post({relativePath: `${slug}.md`});
  console.log(result);
  return (
   <NewsDetailsPage {...result}/>
  );
}

export default NewsDetails;
