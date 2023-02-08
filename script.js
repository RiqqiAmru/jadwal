fetch("jadwal.json")
.then(function(response){
  return response.json();
})
.then(function(jadwal){
  let placeholder = document.querySelector(".data-output");
  let output = "";
  for(let j of jadwal){
    output+=`
    <tr>
      <td>${j.kode}</td>
      <td>${j.makul}</td>
      <td>${j.kelas}</td>
      <td>${j.dosen}</td>
      <td>${j.hari}</td>
      <td>${j.jam}</td>
      <td>${j.ruang}</td>
    </tr>
    `;
  }
  placeholder.innerHTML=output;
})