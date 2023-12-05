import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useRef } from 'react';
import logo from "../assets/logo.png";


function InvoiceInfo() {
  const pdfRef = useRef();

  const downloadPDF = () => {
    var doc = new jsPDF({
      compress: true,
      putOnlyUsedFonts:true
    });
	
    var elementHTML = document.querySelector("#pdfContainer");

    doc.html(elementHTML, {
        callback: function(doc) {
            doc.save('invoice.pdf');
        },
        margin: [10, 10, 10, 10],
        autoPaging: 'text',
        x: 0,
        y: 0,
        width: 190, //target width in the PDF document
        windowWidth: 675 //window width in CSS pixels
    });
  }

  return (
    <div className="bg-slate-200 h-[90%] flex p-10">

      <div id="pdfSection" className="p-5 basis-2/3 bg-white shadow-lg rounded-lg  overflow-scroll overflow-x-hidden">
        <div id="pdfContainer" className="p-5" ref={pdfRef}>
          
          <div className="flex items-center justify-between mb-8">
            <div class="flex items-center">
              <img class="h-8 w-8 mr-2" src={logo} alt="Logo" />
              <div class="text-gray-700 font-semibold text-lg">Vanier Mobility</div>
            </div>
            <div class="text-gray-700">
              <div class="font-bold text-xl mb-2">INVOICE</div>
              <div class="text-sm">Date: MM/DD/YYYY</div>
              <div class="text-sm">Invoice #: INV12345</div>
            </div>
          </div>

          <div class="border-b-2 border-gray-300 pb-8 mb-8">
            <h2 class="text-2xl font-bold mb-4">Bill To:</h2>
            <div class="text-gray-700 mb-2">John Doe</div>
            <div class="text-gray-700 mb-2">123 Main St.</div>
            <div class="text-gray-700 mb-2">Anytown, USA 12345</div>
            <div class="text-gray-700">johndoe@example.com</div>
          </div>

          <table class="w-full text-left mb-8">
            <thead>
              <tr>
                <th class="text-gray-700 font-bold uppercase py-2">Description</th>
                <th class="text-gray-700 font-bold uppercase py-2">Quantity</th>
                <th class="text-gray-700 font-bold uppercase py-2">Price</th>
                <th class="text-gray-700 font-bold uppercase py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-4 text-gray-700">Phone Plan 1</td>
                <td class="py-4 text-gray-700">1</td>
                <td class="py-4 text-gray-700">$100.00</td>
                <td class="py-4 text-gray-700">$100.00</td>
              </tr>
            </tbody>
          </table>

          <div class="flex justify-end mb-8">
            <div class="text-gray-700 mr-2">Subtotal:</div>
            <div class="text-gray-700">$425.00</div>
          </div>

          <div class="flex justify-end">
            <div class="text-gray-700 mr-2">GST:</div>
            <div class="text-gray-700">$25.50</div>
          </div>
          <div class="flex justify-end mb-8">
            <div class="text-gray-700 mr-2">QST:</div>
            <div class="text-gray-700">$25.50</div>
          </div>

          <div class="flex justify-end mb-8">
            <div class="text-gray-700 mr-2">Total:</div>
            <div class="text-gray-700 font-bold text-xl">$450.50</div>
          </div>

          <div class="border-t-2 border-gray-300 pt-8 mb-8">
            <div class="text-gray-700 mb-2">Payment is due within 30 days. Late payments are subject to fees.</div>
            <div class="text-gray-700 mb-2">Please make checks payable to Vanier Mobility and mail to:</div>
            <div class="text-gray-700">123 Main St., Anytown, USA 12345</div>
          </div>
          
        </div>
      </div>

      <div id="infoSection" className="basis-1/3 ml-10">
        <h1>Info Section</h1>
        // To do: emailJS
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={downloadPDF}>[A] Send Invoice to Client</button>
        // To do: Stripe Paywall
        <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full" onClick={downloadPDF}>[C] Pay Invoice</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={downloadPDF}>Download PDF</button>
      </div>
    </div>
  );
}

export default InvoiceInfo;
