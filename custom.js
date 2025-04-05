function readURL(input, selector) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
          $(selector).attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
  }
}


$('.img-clickable.feature-img').click(function(){
$('input.feature-image').click();
});
$('input.feature-image').change(function(){
  readURL(this, 'img.feature-image');
});

// icon
$('.img-clickable.icon-img').click(function(){
  $('input.icon-image').click();
});
$('input.icon-image').change(function(){
  readURL(this, 'img.icon-image');
});
// end icon

// panoramic
$('.img-clickable.panoramic-img').click(function(){
  $('input.panoramic-image').click();
});
$('input.panoramic-image').change(function(){
  readURL(this, 'img.panoramic-image');
});
// end panoramic

// start multiple images
// function clickedImage(id){
//    if(typeof id !== undefined){
//     alert(id);
//     $('.input-image-'+id).click();
//    }
// }
// $('img.images').click(function(){
//     console.log($(this).attr('row'));
// });
// $('input.images').change(function(){
//     readURL(this, 'img.images');
// });
// end multiple image


$('button#today').click(function(){
  var today = new Date();
  $("input[name='search']").val("");
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  date_string = yyyy+"-"+mm + '-' + dd;
  $('input[name="start_date"]').val(date_string);
  $('input[name="end_date"]').val(date_string);
  $('form#search-form').submit();
});
$('button#yesterday').click(function(){
  $("input[name='search']").val("");
  var today = new Date();
  today.setDate(today.getDate() - 1)
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  date_string = yyyy+"-"+mm + '-' + dd;
  $('input[name="start_date"]').val(date_string);
  $('input[name="end_date"]').val(date_string);
  $('form#search-form').submit();
});
$('button#this-week').click(function(){
  $("input[name='search']").val("");
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  date_string_end = yyyy+"-"+mm + '-' + dd;

  var today1 = new Date();
  today1.setDate(today1.getDate() - 6)
  var dd = String(today1.getDate()).padStart(2, '0');
  var mm = String(today1.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today1.getFullYear();
  date_string_start = yyyy+"-"+mm + '-' + dd;

  $('input[name="start_date"]').val(date_string_start);
  $('input[name="end_date"]').val(date_string_end);
  $('form#search-form').submit();
});


$('button#last-week').click(function(){
  $("input[name='search']").val("");
  var today = new Date();
  var today1 = new Date();
  today1.setDate(today1.getDate() - 13)
  var dd = String(today1.getDate()).padStart(2, '0');
  var mm = String(today1.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today1.getFullYear(); 
  date_string_start = yyyy+"-"+mm + '-' + dd;

  var today1 = new Date();
  today1.setDate(today1.getDate() - 7)
  var dd = String(today1.getDate()).padStart(2, '0');
  var mm = String(today1.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today1.getFullYear();
  date_string_end = yyyy+"-"+mm + '-' + dd;

  $('input[name="start_date"]').val(date_string_start);
  $('input[name="end_date"]').val(date_string_end);
  $('form#search-form').submit();
});
$('button#this-month').click(function(){
  $("input[name='search']").val("");
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  // var lastDay = new Date(today.getFullYear(), today.getMonth()+1, 0);
  $('input[name="start_date"]').val(yyyy+"-"+mm + '-01');
  $('input[name="end_date"]').val(yyyy+"-"+mm + '-'+String(today.getDate()).padStart(2, '0'));
  $('form#search-form').submit();
});

// $('button#this-month').click(function(){
//     $("input[name='search']").val("");
//     var today = new Date();
//     var dd = String(today.getDate()).padStart(2, '0');
//     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     var yyyy = today.getFullYear();
//     var lastDay = new Date(today.getFullYear(), today.getMonth()+1, 0);
//     $('input[name="start_date"]').val(yyyy+"-"+mm + '-01');
//     $('input[name="end_date"]').val(yyyy+"-"+mm + '-'+String(lastDay.getDate()).padStart(2, '0'));
//     $('form#search-form').submit();
// });


$('button#last-month').click(function(){
  $("input[name='search']").val("");
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() +1).padStart(2, '0'); //January is 0!
  if(mm==1 || mm==0){
      mm = 12;
  }
  else{
      mm = mm-1;
  }
  var yyyy = today.getFullYear();
  var lastDay = new Date(today.getFullYear(), today.getMonth(), 0);
  if(mm==12) {
      yyyy = yyyy - 1;
  }
  $('input[name="start_date"]').val(yyyy+"-"+mm + '-01');
  $('input[name="end_date"]').val(yyyy+"-"+mm + '-'+String(lastDay.getDate()).padStart(2, '0'));
  $('form#search-form').submit();
});

function clickdownload () {
  var url = $("#download-button").attr("href")
  $("#search-form input, #search-form select").each(function(key, val){
      console.log($(this).val(),$(this).attr("name"));
      if(key==0) {
          url = url+"?"
      }
      else{
          url = url+ "&";
      }
      url = url+$(this).attr("name")+"="+$(this).val();
  });
  $("#download-button").attr("href", url);

  return true;
  
}
$(".clickable").dblclick(function(){
  var url = $(this).attr("url");
  window.location.replace(url);
});

// set smart to menu 
// localStorage.setItem("sm-setmenu","top");


function rejectTransaction(t,id, url,label='Reason',placeholder='Why do you reject this transacton?',requiredMessage='Your reason is required',buttonLabel="Reject") {
const { value: text } =  Swal.fire({
  input: 'textarea',
  inputLabel: label,
  inputPlaceholder: placeholder,
  inputAttributes: {
    'aria-label': placeholder
  },
  confirmButtonText: buttonLabel,
  preConfirm: (value) => {
    if (!value) {
      Swal.showValidationMessage(
        '<i class="fa fa-info-circle"></i> '+requiredMessage
      )
    }
  }
  // cancelButtonText: "Close",
  // showCancelButton: true
}).then(function(data) {
  if(data.isConfirmed){
    $('input.'+t+id).val(data.value);
    $('form.'+t+id).submit();
  }
  else{
    console.log("Reason is required");
  }
})

if (text) {
  return true;
}
return false;
}




$(document).on("click", "#addWithdrawalCode", function () {
   $("#WithdrawCode form").attr( 'action', $(this).data('url') );
   $("#WithdrawCode form input[name='withdrawal_code']").attr( 'value', $(this).data('code') );
});
$(document).on("click", "#modifyBankAccountForm", function () {
   $("#bankAccountForm form").attr( 'action', $(this).data('url') );
   $("#bankAccountForm form input[name='bank_name']").attr( 'value', $(this).data('name') );
   $("#bankAccountForm form input[name='bank_username']").attr( 'value', $(this).data('username') );
   $("#bankAccountForm form input[name='bank_number']").attr( 'value', $(this).data('number') );
});
$(document).on("click", "#modifyIdCardForm", function () {
   $("#IDForm form").attr( 'action', $(this).data('url') );
   $("#IDForm form input[name='id_card_number']").attr( 'value', $(this).data('idcardnumber') );
   $("#IDForm form input[name='actual_name']").attr( 'value', $(this).data('actualname') );
});

$(document).on("click", "#addPassword", function () {
   $("#changePassword form").attr( 'action', $(this).data('url') );
   $("#changePassword form input[name='phone']").attr( 'value', $(this).data('phone') );
});
$(document).on("click", "#creditModify", function () {
   $("#creditModifyForm form").attr( 'action', $(this).data('url') );
   $("#creditModifyForm form input[name='credit']").attr( 'value', $(this).data('credit') );
});
$(document).on("click", "#updateCreditScore", function () {
   $("#creditScoreForm form").attr( 'action', $(this).data('url') );
   $("#creditScoreForm form input[name='credit_score']").attr( 'value', $(this).data('score') );
});

// show status form
$(document).on("click", "#reviewStatus", function () {
   $("#reviewStatusForm form").attr( 'action', $(this).data('url') );
   $("#reviewStatusForm form input[name='status']").attr( 'value', $(this).data('status') );
   $("#reviewStatusForm form textarea[name='status_description']").html($(this).data('status_description'));
});
// action when click on status list
$(document).on("click", ".orderStatusName", function () {
   $("#reviewStatusForm form input[name='status']").attr( 'value', $(this).data('status') );
});





$('.img_id_card_front').click(function(){
  $('input[name="id_card_front"]').click();
});
$('.img_id_card_back').click(function(){
  $('input[name="id_card_back"]').click();
});
$('.img_selfie_photo').click(function(){
  $('input[name="selfie_photo"]').click();
});
$('.img_signature').click(function(){
  $('input[name="signature"]').click();
});


$('input[name="id_card_front"]').change(function(){
  readURL(this, '.img_id_card_front');
});
$('input[name="id_card_back"]').change(function(){
  readURL(this, '.img_id_card_back');
});
$('input[name="selfie_photo"]').change(function(){
  readURL(this, '.img_selfie_photo');
});
$('input[name="signature"]').change(function(){
  readURL(this, '.img_signature');
});




