

let textarea = document.querySelector('textarea');

textarea.addEventListener('keyup', (e)=>{
  let heightX = e.target.scrollHeight
  textarea.style.height = `${heightX}px`
})

// let tinymce = document.querySelector('#mytextarea')


// tinymce.init({
//   selector: `${tinymce}`,
//   plugins: [
//     'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
//     'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
//     'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
//   ],
//   toolbar: 'undo redo | formatpainter casechange blocks | bold italic backcolor | ' +
//     'alignleft aligncenter alignright alignjustify | ' +
//     'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
// });