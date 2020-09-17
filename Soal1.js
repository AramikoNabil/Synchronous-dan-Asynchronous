function newCallback(namaD, namaB, callbackPulang) {
  console.log(namaD, namaB);

  callbackPulang();
}

function pulang() {
  console.log("Pulang Kampung");
}

newCallback("adi", "yusuf", pulang);
