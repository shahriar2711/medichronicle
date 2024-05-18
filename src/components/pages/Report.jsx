import React, {useState} from 'react';

function Report() {

  const [file , setFile] = useState()

  function handleFile(event){
    setFile(event.target.files[0])
    
  }

  function handleUpload() {
    const formData = new FormData()
    formData.append('file' , file)
    fetch(
      'url',
      {
        method:"POST",
        body:formData
      }
    ).then((response) => response.json())
    .then(
      (result) => {
        console.log('success',result)
      }
    )
    .catch(error => {
      console.error("Error:" , error)
    })
  }


  return (
    <>
    <div>
      <h2>Upload your report here</h2>
      <form>
        <input type="file" name='file' onChange={handleFile} />
        <button>Upload</button>
      </form>
    </div>
    </>
  )
}

export default Report
