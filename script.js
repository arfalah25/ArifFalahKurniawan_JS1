// Fungsi untuk menghitung faktorial
function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Fungsi untuk mengecek apakah suatu angka adalah bilangan prima
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Fungsi untuk menentukan kategori berdasarkan nilai
  function getGrade(score) {
    if (score >= 90) {
      return 'A';
    } else if (score >= 80) {
      return 'B';
    } else if (score >= 70) {
      return 'C';
    } else if (score >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }
  
  // Penggunaan switch case untuk menentukan hari berdasarkan angka
  function getDayName(dayNumber) {
    switch (dayNumber) {
      case 0:
        return 'Minggu';
      case 1:
        return 'Senin';
      case 2:
        return 'Selasa';
      case 3:
        return 'Rabu';
      case 4:
        return 'Kamis';
      case 5:
        return 'Jumat';
      case 6:
        return 'Sabtu';
      default:
        return 'Hari tidak valid';
    }
  }
  
  // Penggunaan perulangan for untuk mencetak bilangan prima dari 1 hingga 20
  console.log('Bilangan prima dari 1 hingga 20:');
  for (var i = 1; i <= 20; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
  
  // Penggunaan perulangan while untuk mencetak faktorial dari 1 hingga 5
  console.log('Faktorial dari 1 hingga 5:');
  var j = 1;
  while (j <= 5) {
    console.log('Faktorial dari ' + j + ' adalah ' + factorial(j));
    j++;
  }
  
  // Contoh penggunaan nested if else untuk menentukan kategori berdasarkan nilai
  var nilai = 85;
  var kategori;
  
  if (nilai >= 90) {
    kategori = 'A';
  } else {
    if (nilai >= 80) {
      kategori = 'B';
    } else {
      if (nilai >= 70) {
        kategori = 'C';
      } else {
        kategori = 'D';
      }
    }
  }
  
  console.log('Kategori nilai Anda adalah: ' + kategori);
  