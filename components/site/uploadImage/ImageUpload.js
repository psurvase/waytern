import React,{useState} from 'react'

const ImageUpload = (props) => {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
    console.log("this is sjfbgjshf",i);
    console.log("files upka", i.name);
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {        
    const body = new FormData();
    // console.log("file", image)
    body.append("file", image);    
    const response = await fetch("/api/upload", {
      method: "POST",
      body
    });
  };


  return (
    <div>
      <div>
        <div style={{textAlign:"center"}}>
        <img src={createObjectURL} width="50%"/>
        </div>
       <div style={{textAlign:"center"}} >
       <h4>Select Image</h4>
        <input type="file" name="myImage" onChange={uploadToClient} />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button>
       </div>
      </div>
    </div>
  )
}

export default ImageUpload