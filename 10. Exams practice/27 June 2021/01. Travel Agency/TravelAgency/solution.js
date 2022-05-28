window.addEventListener('load', solution);

function solution() {
  const fname = document.getElementById('fname');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const address = document.getElementById('address');
  const code = document.getElementById('code');

  const submitBtn = document.getElementById('submitBTN');
  const infoPreviewUl = document.getElementById('infoPreview');

  submitBtn.addEventListener('click', addInformation);

  function addInformation() {
    if (fname.value == '' || email.value == '') {
      return;
    }

    const fullNameLi = createLiElement(`Full name: ${fname.value}`);
    const emaillLi = createLiElement(`Email: ${email.value}`);
    const phoneLi = createLiElement(`Phone number: ${phone.value}`);
    const addressLi = createLiElement(`Address: ${address.value}`);
    const postalCode = createLiElement(`Postal colde: ${code.value}`);

    infoPreviewUl.appendChild(fullNameLi);
    infoPreviewUl.appendChild(phoneLi);
    infoPreviewUl.appendChild(emaillLi);
    infoPreviewUl.appendChild(addressLi);
    infoPreviewUl.appendChild(postalCode);

    submitBtn.disabled = true;

    const editBtn = document.getElementById('editBTN');
    editBtn.disabled = false;
    editBtn.addEventListener('click', editUser);

    const continueBtn = document.getElementById('continueBTN')
    continueBtn.disabled = false;
    continueBtn.addEventListener('click', successfullReservetion)

    fname.value = '';
    email.value = '';
    phone.value = '';
    address.value = '';
    code.value = '';
  }
}

function editUser() {
  const info = document.getElementById('infoPreview');
  const fileds = Array.from(info.children);

  const fname = fileds[0].textContent;
  const email = fileds[1].textContent;
  const phone = fileds[2].textContent;
  const address = fileds[3].textContent;
  const code = fileds[4].textContent;

  document.getElementById('fname').value = fname;
  document.getElementById('email').value = email;
  document.getElementById('phone').value = phone;
  document.getElementById('address').value = address;
  document.getElementById('code').value = code;

  info.innerHTML = '';

  document.getElementById('submitBTN').disabled = false;
  document.getElementById('editBTN').disabled = true;
  document.getElementById('continueBTN').disabled = true;
}


function successfullReservetion() {
  const divBlock = document.getElementById('block');
  divBlock.innerHTML = '';
  const h3 = document.createElement('h3');
  h3.textContent = "Thank you for your reservation!"
  divBlock.appendChild(h3);
}

function createLiElement(input) {
  const li = document.createElement('li');
  li.textContent = input;

  return li;
}