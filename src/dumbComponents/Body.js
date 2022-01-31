import Title from "./Title";
import '../AppVars.css'

function Body() {
  return (<div class="bg-slate-500 h-[calc(100vh-var(--headerheight))]">
          <div>
              <Title text="Welcome to my portfolio" altText="." divHeight="60vh" fontSize="70px"/>
          </div>
        </div>
  );
}

export default Body;
