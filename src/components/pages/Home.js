import React,{useEffect} from 'react';

export default function Home() {
  useEffect(()=>{
    fetch("http://localhost:3001/api/users/secretclub",{
      headers:{
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvZUBqb2Uuam9lIiwiaWQiOjEsImlhdCI6MTY1MzY4MjQ1NywiZXhwIjoxNjUzNjg5NjU3fQ.fh6CWxZ45kZmgYw6AWhxdiAUCWOmtmwGstdQGCktHYs"
      }
    }).then(res=>res.json()).then(data=>{
      console.log(data);
    })
  },[])
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
    </div>
  );
}
