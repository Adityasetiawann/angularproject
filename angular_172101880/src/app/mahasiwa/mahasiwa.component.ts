import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';

declare const $ : any;

@Component({
  selector: 'app-mahasiwa',
  templateUrl: './mahasiwa.component.html',
  styleUrls: ['./mahasiwa.component.css']
})
export class MahasiwaComponent implements OnInit, AfterViewInit {
  data: any;
  table1: any;
  
  constructor(private http : HttpClient) { }

  ngAfterViewInit(): void {
    this.table1 = $("#table1").DataTable();

    this.bind_mahasiswa();
  }

  ngOnInit(): void {

  }

  bind_mahasiswa(): void {
    this.http.get("https://stmikpontianak.net/011100862/tampilMahasiswa.php")
    .subscribe((data: any) => {
      console.log(data);

      data.forEach((element: any) => {
        var tempatTanggalLahir = element.TempatLahir + ", " + element.TanggalLahir;

        var row = [
          element.Nim,
          element.Nama,
          element.JenisKelamin,
          tempatTanggalLahir,
          element.jp,
          element.Alamat,
          element.StatusNikah,
          element.TahunMasuk
        ]

        this.table1.row.add(row);
      });

      this.table1.draw(false);
      
    })

      }



    }
