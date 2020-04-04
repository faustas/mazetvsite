import Layout from '../components/MyLayout'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title={"Blog Post 1"}/>
        <PostLink title={"Blog Post 2"}/>
        <PostLink title={"Blog Post 3"}/>
        <PostLinkP id="Deploy Next.js"/>
      </ul>
      <h1>Batman TV shows</h1>
      <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]/[name]" as={`/p/${show.id}/${show.name}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    </Layout>
  )
}

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const PostLinkP = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default Index;