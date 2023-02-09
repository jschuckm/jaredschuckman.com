function Title({text,altText,divHeight,fontSize}) {
  return (

        <div style={{backgroundColor:"#1e2330",height:divHeight,width:"100%",display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <h2 style={{fontFamily:"Montserrat",fontWeight:"700",letterSpacing:"1px",fontSize:fontSize,color:"white"}}>
                {text}<span style={{color:"#f81c2f"}}>{altText}</span>
            </h2>
        </div>
        
  );
}

export default Title;
