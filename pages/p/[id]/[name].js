import Layout from '../../../components/MyLayout';
import H1 from '../../../components/H1';
import fetch from 'isomorphic-unfetch';
import css from "../../../styles/item.module.scss"

const Post = props => (
  <Layout>
    <H1 text={props.show.name}/>
    {/*<h1 className={boldString}>{props.show.name}</h1>*/}
    <p className={css.boldString}>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    {props.show.image ? <img src={props.show.image.medium} /> : null}
  </Layout>
)

Post.getInitialProps = async function(context) {
  const id = context.query.id
  const res = await fetch(`https://api.tvmaze.com/shows/${context.query.id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show }

};

export default Post;

