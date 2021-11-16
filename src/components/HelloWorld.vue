<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">Frisky Wijaya</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Tentang">Tentang</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Pendidikan">Pendidikan</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#kontak">Kontak</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<!--Jumbotron-->
  <div class="jumbotron text-center" id="Home">
    <img src="frisky.png" alt="" width="150" class="rounded-circle img-thumbnail">
    <h1 class="display-4">Frisky Wijaya</h1>
    <p class="lead">Pelajar</p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,192C672,224,768,256,864,240C960,224,1056,160,1152,128C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  </div>
  <!--Akhir Jumotron-->
  <!--Tentang-->
  <div id="Tentang">
    <div class="container">
      <div class="row text-center mb-3">
        <div class="col">
          <h2>Tentang Saya</h2>
        </div>
      </div>
      <div class="row justify-content-center fs-5 text-center">
        <div class="col-4">
          <p>Haloo, Perkenalkan nama saya frisky wijaya biasa dipanggil frisky. Alamat Rumah saya di perumahan Griya Cipta Pratama blok o no 10 Sako Palembang, saya anak kedua dari 3 bersaudara.</p>
        </div>
        <div class="col-4">
          <p>Hobby saya bermain game, mendengarkan musik dan olahraga. Saya juga pernah mengikuti kegiatan praktek kerja lapangan (PKL) di beberapa perusahaan seperti CV.Bobby Komputer, dan PT.Putra Sakti Mandiri.</p>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e2edff" fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,58.7C384,53,480,75,576,117.3C672,160,768,224,864,240C960,256,1056,224,1152,181.3C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  </div>
  <!--Akhir tentang-->
  <!--Pendidikan-->
  <div id="Pendidikan">
    <div class="container">
      <div class="row text-center mb-3">
        <div class="col">
          <h2>Riwayat Pendidikan</h2>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-4">
          <div class="card">
              <img src="sd.png" class="card-img-top" alt="foto sd">
              <div class="card-body">
                <p class="card-text">SD Xaverius 2</p>
              </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
              <img src="smp.jpg" class="card-img-top" alt="foto smp">
              <div class="card-body">
                <p class="card-text">SMP Xaverius Maria</p>
              </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
              <img src="smk.jfif" class="card-img-top" alt="foto smk">
              <div class="card-body">
                <p class="card-text">SMK Xaverius Palembang</p>
              </div>
          </div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L48,160C96,192,192,256,288,240C384,224,480,128,576,128C672,128,768,224,864,234.7C960,245,1056,171,1152,144C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  </div>
  <!--Akhir pendidikan-->
  <!--Kontak-->
  <div id="kontak">
    <div class="container">
      <div class="row text-center mb-3">
        <div class="col">
          <h2>Kontak Saya</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form>
  <div class="mb-3">
    <label for="name" class="form-label"> Nama </label>
    <input type="text" class="form-control" id="name" aria-describedby="name">
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" aria-describedby="email">
  </div>
  <div class="mb-3">
    <label for="pesan" class="form-label">Pesan</label>
    <textarea class="form-control" id="pesan" rows="3"></textarea>
  </div>
  <button type="kirim" class="btn btn-primary">kirim</button>
</form>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0d6efd" fill-opacity="1" d="M0,192L48,176C96,160,192,128,288,149.3C384,171,480,245,576,245.3C672,245,768,171,864,165.3C960,160,1056,224,1152,208C1248,192,1344,96,1392,48L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  </div>
  <!--Akhir Kontak-->
  <!--Footer-->
  <footer class="bg-primary text-white text-center pb-5">
    <p>Created By <a href="https://www.instagram.com/friskywijaya01/" class="text-white fw-bold">Frisky Wijaya</a></p>
  </footer>
  <!--akhir footer-->
<link rel="stylesheet" href="style.css">
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
