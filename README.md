This project is from a youtube tutoriel.

layout.js is the main entry (for all page an header or footer goes there)
page.js is like index.html --> localhost:3000/

by default a component is SSR
SSR: fetch data, access backend, sensitive data, large dependencies

routing: in app folder name of folder create a route
app/user/page.js --> localhost:3000/user
app/posts/page.js --> render all post in localhost:3000/user
app/posts/new/page.js --> nested route localhost:3000/user/new
dynamic route
app/posts/[postID] --> postID in available in the file !

I can create a layout.js file in a route !
or a lodaing.js file, or error.js

data fetching:
1. SSR -> async component in fetch add {cache: 'no-store'}
2. SSG -> remove {cache: 'no-store'} its cached so it doesn't change often
3. ISR -> add {next: {revalidate: 10}} its cached but after x time its refreshing

serverless route handler (2way)
every next.js route are serverless route,
function are lambda
1 recommended by youtuber jsmastery app/api
app/api/users/route.js act as backend route
export async function GET(req) {return nex Response('Hello World')}
2 in app add route.js

SEO: static vs dynamic metadata
static: export const metadata = {title: 'Home}
dynamic: export async function getMeta({paramas}) {
  const product = await getProduct(parmas)
  return {title: product.title}
}