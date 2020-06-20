import React from 'react'
import DatatableCompaign from '../components/datatable compaign/datatable_compaign';
import '../App.scss'
import '../assets/sass/pages/compaign.scss'
import Button from '../components/button/button.component';

const th = ['kampanİya ADI','məhsulların sayı', 'Status', 'Düzəlİş' ];
var sifaris = [
  {
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'say': '1',
    'status': 'Aktiv',
  },
  {
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'say': '1',
    'status': 'Gözləmədə',
  }, {
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'say': '1',
    'status': 'Hazırlanır',
  }, {
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'say': '1',
    'status': 'Qəbul edilmədi',
  }, {
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'say': '1',
    'status': 'Qəbul edilmədi',
  }, {
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'say': '1',
    'status': 'Qəbul edilmədi',
  }, {
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'say': '1',
    'status': 'Qəbul edilmədi',
  }, {
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'say': '1',
    'status': 'Qəbul edilmədi',
  }, {
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'say': '1',
    'status': 'Qəbul edilmədi',
  }, {
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'say': '1',
    'status': 'Qəbul edilmədi',
  }, {
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'say': '1',
    'status': 'Qəbul edilmədi',
  }, {
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'say': '1',
    'status': 'Qəbul edilmədi',
  }, {
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'say': '1',
    'status': 'Qəbul edilmədi',
  }, {
    'ad':'Nümunə məhsul adı məhsul adı məhsul adı',
    'say': '1',
    'status': 'Qəbul edilmədi',
  } 
  
]

function Compaign() {
    return (
        <div className='container-fluid'>
            <div className="head_compaign">
                <h1>Toplam kampaniya sayı: 76</h1>
                <div className='compaign_buttons'>
                    <Button className='compaignbtn active' name='+ Kampanİya əlavə et'/>
                    <div>&nbsp;&nbsp;</div>
                    <Button className='compaignbtn' name='yadda saxla'/>
                </div>
            </div>
            <br/>
            <DatatableCompaign thead ={th} tbody={sifaris}/>
        </div>
    )
}

export default Compaign
