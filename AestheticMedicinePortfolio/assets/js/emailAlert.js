/*Email Alert - activated inside body index.php */
function EmailAlert(){
  let url = location.href;
  console.log(url);
  let info = url.split(`?`);
  //console.log(info[1]);
  if(info[1] === 'success'){
    alert("Your e-mail has been successfully sent to me");
  }else if(info[1] === 'fail'){
    alert("There have been some problems while contacting me.\n\nPlease try again or write an email to me directly: contact@drnawacka.com");
  }else{
    //do nothing
  }
}
