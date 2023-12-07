import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";
import logo from "../assets/logo.png";
import emailjs from "emailjs-com";
import { useState } from "react";

function InvoiceInfo({ cookies }) {
  var pathArray = window.location.pathname.split("/");
  var pathId = pathArray[pathArray.length - 1];

  const invoiceObj = cookies.invoices.find((invoice) => invoice.id == pathId);

  const date = new Date(invoiceObj.invoiceDueDate);
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };

  //const pdfRef = useRef();
  const fileData = new FormData();

  const downloadPDF = () => {
    var doc = new jsPDF({
      compress: true,
      putOnlyUsedFonts: true,
    });

    var elementHTML = document.querySelector("#pdfContainer");

    doc.html(elementHTML, {
      callback: function (doc) {
        doc.save("VM_" + invoiceObj.invoiceNumber);
      },
      margin: [10, 10, 10, 10],
      autoPaging: "text",
      x: 0,
      y: 0,
      width: 190, //target width in the PDF document
      windowWidth: 675, //window width in CSS pixels
    });
  };

  const sendPDF = () => {
    const templateParams = {
      invoice_number: invoiceObj.invoiceNumber,
      customer_name: "Jolson Cruz",
      customer_email: "iamjolsoncruz@gmail.com",
      due_date: invoiceObj.invoiceDueDate,
      total_amount: invoiceObj.invoiceAmount,
      payment_link: "https://stripe.com",
      file: fileData,
    };

    emailjs
      .send(
        "service_xxu45tj",
        "template_o94bi2h",
        templateParams,
        "u7cmwo4kt6eb6IzSC"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  const [productQty, setProductQty] = useState(1); // State for productQty, initialized to 1
  const [subTotal, setSubTotal] = useState(invoiceObj.invoiceTotal); // State for subTotal, initialized to 100
  const [grandTotal, setGrandTotal] = useState(invoiceObj.invoiceTotal * 1.15); // State for subTotal, initialized to 100

  return (
    <div className="bg-slate-200 h-[90%] flex p-10">
      <div
        id="pdfSection"
        className="p-5 basis-2/3 bg-white shadow-lg rounded-lg  overflow-scroll overflow-x-hidden"
      >
        <div id="pdfContainer" className="p-5">
          <div className="flex items-center justify-between mb-8">
            <div class="flex items-center">
              <img class="h-8 w-8 mr-2" src={logo} alt="Logo" />
              <div class="text-gray-700 font-semibold text-lg">
                Vanier Mobility
              </div>
            </div>
            <div class="text-gray-700">
              <div class="font-bold text-xl mb-2">INVOICE</div>
              <div class="text-sm">
                Due Date: {date.toLocaleDateString("en-US", dateOptions)}
              </div>
              <div class="text-sm">Invoice #: {invoiceObj.invoiceNumber}</div>
            </div>
          </div>

          <div class="border-b-2 border-gray-300 pb-8 mb-8">
            <h2 class="text-2xl font-bold mb-4">Bill To:</h2>
            <div class="text-gray-700 mb-2">{cookies.name}</div>
            <div class="text-gray-700 mb-2">{cookies.address.address}</div>
            <div class="text-gray-700 mb-2">
              {cookies.address.city} {cookies.address.province}{" "}
              {cookies.address.country} {cookies.address.postalCode}
            </div>
            <div class="text-gray-700">{cookies.user.email}</div>
          </div>

          <table class="w-full text-left mb-8">
            <thead>
              <tr>
                <th class="text-gray-700 font-bold uppercase py-2">
                  Description
                </th>
                <th class="text-gray-700 font-bold uppercase py-2">Quantity</th>
                <th class="text-gray-700 font-bold uppercase py-2">Price</th>
                <th class="text-gray-700 font-bold uppercase py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {invoiceObj.invoiceDtls.map((product) => (
                <tr key={product.id}>
                  <td class="py-4 text-gray-700">Vanier Mobility 45GB</td>
                  <td class="py-4 text-gray-700">{productQty}</td>
                  <td class="py-4 text-gray-700">
                    ${invoiceObj.invoiceTotal.toFixed(2)}
                  </td>
                  <td class="py-4 text-gray-700">
                    ${(invoiceObj.invoiceTotal * productQty).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div class="flex justify-end mb-8">
            <div class="text-gray-700 mr-2">Subtotal:</div>
            <div class="text-gray-700">${subTotal.toFixed(2)}</div>
          </div>

          <div class="flex justify-end">
            <div class="text-gray-700 mr-2">GST:</div>
            <div class="text-gray-700">${(subTotal * 0.05).toFixed(2)}</div>
          </div>
          <div class="flex justify-end mb-8">
            <div class="text-gray-700 mr-2">QST:</div>
            <div class="text-gray-700">${(subTotal * 0.09975).toFixed(2)}</div>
          </div>

          <div class="flex justify-end mb-8">
            <div class="text-gray-700 mr-2">Total:</div>
            <div class="text-gray-700 font-bold text-xl">
              {grandTotal.toFixed(2)}
            </div>
          </div>

          <div class="border-t-2 border-gray-300 pt-8 mb-8">
            <div class="text-gray-700 mb-2">
              Payment is due within 30 days. Late payments are subject to fees.
            </div>
            <div class="text-gray-700 mb-2">
              Please make checks payable to Vanier Mobility and mail to:
            </div>
            <div class="text-gray-700">
              821 Sainte Croix Ave, Saint-Laurent, Quebec H4L 3X9
            </div>
          </div>
        </div>
      </div>

      <div id="infoSection" className="basis-1/3 ml-10">
        {cookies.user.userType ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-3 rounded-full"
            onClick={sendPDF}
          >
            Send Invoice to Client
          </button>
        ) : (
          <button
            className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 mb-3 rounded-full"
            onClick={downloadPDF}
          >
            Pay Invoice
          </button>
        )}
        <br />
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={downloadPDF}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default InvoiceInfo;
