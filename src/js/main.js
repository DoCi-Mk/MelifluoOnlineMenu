const velotoCategory = document.getElementById("veloto");
const mochiCategory = document.getElementById("mochi");
const cakeCategory = document.getElementById("cake");
const brunchCategory = document.getElementById("brunch");
const openingCategory = document.getElementById("opening");



import { brunchProducts } from "./products/brunch.js";
import { bubbleTeaProducts } from "./products/bubbletea.js";
import { cakeProducts } from "./products/cake.js";
import { hotDrinksProducts } from "./products/hotDrinks.js";
import { mochiProducts } from "./products/mochi.js";
import { multiTaskProducts } from "./products/multitask.js";
import { openingProducts } from "./products/opening.js";
import { shakeProducts } from "./products/shake.js";
import { teaProducts } from "./products/tea.js";
import { velotoProducts } from "./products/veloto.js";

class Display {
  openModal() {
    const modal = document.getElementById("modal");
    const backdrop = document.getElementById("backdrop");
    const close_btn = document.getElementById("ok-btn");
    const close_modal = document.getElementById("close-modal");
    setTimeout(() => {
      modal.classList.remove("hidden");
      backdrop.classList.remove("hidden");
    }, 1000);

    const closeFunction = () => {
      modal.classList.add("hidden");
      backdrop.classList.add("hidden");
    };

    backdrop.addEventListener("click", closeFunction);
    close_btn.addEventListener("click", closeFunction);
  }
  velotoDisplay() {
    let result = "";
    velotoProducts.forEach((item) => {
      let ul = document.getElementById("veloto-ul");
      result += `<li>
                <button type="button" disabled class="block w-full text-start">
                  <div class="flex items-center gap-[5px] text-sm text-black">
                    <!-- سمت راست (نام محصول) -->
                    <span class="whitespace-nowrap">${item.title}</span>

                    <!-- خط وسط با فلکس‌گرو -->
                    <div
                      class="flex-grow border-t border-dashed border-black h-0"
                    ></div>
                    <!-- سمت چپ (قیمت‌ها) -->
                    <span class="ml-2 font-normal whitespace-nowrap">${item.price}</span>
                  </div>
                   <div class="mt-1 text-xs font-light">
                    <p>${item.description}</p>
                  </div>
                </button>
              </li>`;
      ul.innerHTML = result;
    });
  }
  mochiDisplay() {
    let result = `
    <h2
          class="flex items-center text-center text-xl text-gray-800 mt-8"
        >
          <span class="flex-grow h-px bg-[#fffd74] mx-2"></span>
          <span class="bg-[#fffd74] py-1.5 px-4 text-[#0a0aa8] rounded-lg"
            >موچی</span
          >
          <span class="flex-grow h-px bg-[#fffd74] mx-2"></span>
        </h2>
      `;

    mochiProducts.forEach((item) => {
      result += `        <div class="flex flex-col items-center justify-center bg-white p-4">
          <!-- کروسان ساده -->
          <div class="flex items-center justify-between w-full max-w-3xl">
            <!-- عکس -->
            <img
              src="${item.imageUrl}"
              alt="${item.description}"
              class="w-20 h-auto object-contain"
            />

            <!-- متن و خط -->
            <div class="flex-1 flex flex-col items-start">
              <div class="flex items-center w-full">
                <span class="text-sm font-semibold text-gray-800 ml-2">${item.title}</span>
                
                <div
                  class="flex-grow border-t border-dashed border-black h-0"
                ></div>
                <span class="text-sm font-bold text-gray-800 mx-2">${item.price}</span>
              </div>
              <div class="mt-1 text-xs font-light">
                <p>${item.description}</p>
              </div>
            </div>
          </div>
        </div>`;
      mochiCategory.innerHTML = result;
    });
  }
  bubbleTeaDisplay() {
    let result = "";
    bubbleTeaProducts.forEach((item) => {
      let ul = document.getElementById("bubbleTea-ul");
      result += `<li>
                <button type="button" disabled class="block w-full text-start">
                  <div class="flex items-center gap-[5px] text-sm text-black">
                    <!-- سمت راست (نام محصول) -->
                    <span class="whitespace-nowrap">${item.title}</span>

                    <!-- خط وسط با فلکس‌گرو -->
                    <div
                      class="flex-grow border-t border-dashed border-black h-0"
                    ></div>
                    <!-- سمت چپ (قیمت‌ها) -->
                    <span class="ml-2 font-normal whitespace-nowrap">${item.price}</span>
                  </div>
                   <div class="mt-1 text-xs font-light">
                    <p>${item.description}</p>
                  </div>
                </button>
              </li>`;
      ul.innerHTML = result;
    });
  }
  shakeDisplay() {
    let result = "";
    shakeProducts.forEach((item) => {
      let ul = document.getElementById("shake-ul");
      result += `<li>
                <button type="button" disabled class="block w-full text-start">
                  <div class="flex items-center gap-[5px] text-sm text-black">
                    <!-- سمت راست (نام محصول) -->
                    <span class="whitespace-nowrap">${item.title}</span>

                    <!-- خط وسط با فلکس‌گرو -->
                    <div
                      class="flex-grow border-t border-dashed border-black h-0"
                    ></div>
                    <!-- سمت چپ (قیمت‌ها) -->
                    <span class="ml-2 font-normal whitespace-nowrap">${item.price}</span>
                  </div>
                   <div class="mt-1 text-xs font-light">
                    <p>${item.description}</p>
                  </div>
                </button>
              </li>`;
      ul.innerHTML = result;
    });
  }
  hotDrinksDisplay(){
    let result = "";
    hotDrinksProducts.forEach((item) => {
      let ul = document.getElementById("hotDrinks-ul");
      result += `<li>
                <button type="button" disabled class="block w-full text-start">
                  <div class="flex items-center gap-[5px] text-sm text-black">
                    <!-- سمت راست (نام محصول) -->
                    <span class="whitespace-nowrap">${item.title}</span>

                    <!-- خط وسط با فلکس‌گرو -->
                    <div
                      class="flex-grow border-t border-dashed border-black h-0"
                    ></div>
                    <!-- سمت چپ (قیمت‌ها) -->
                    <span class="ml-2 font-normal whitespace-nowrap">${item.price}</span>
                  </div>
                   <div class="mt-1 text-xs font-light">
                    <p>${item.description}</p>
                  </div>
                </button>
              </li>`;
      ul.innerHTML = result;
    });
  }
  teaDisplay(){
    let result = "";
    teaProducts.forEach((item) => {
      let ul = document.getElementById("tea-ul");
      result += `<li>
                <button type="button" disabled class="block w-full text-start">
                  <div class="flex items-center gap-[5px] text-sm text-black">
                    <!-- سمت راست (نام محصول) -->
                    <span class="whitespace-nowrap">${item.title}</span>

                    <!-- خط وسط با فلکس‌گرو -->
                    <div
                      class="flex-grow border-t border-dashed border-black h-0"
                    ></div>
                    <!-- سمت چپ (قیمت‌ها) -->
                    <span class="ml-2 font-normal whitespace-nowrap">${item.price}</span>
                  </div>
                   <div class="mt-1 text-xs font-light">
                    <p>${item.description}</p>
                  </div>
                </button>
              </li>`;
      ul.innerHTML = result;
    });
  }
  multiTaskDisplay() {
    let result = "";
    multiTaskProducts.forEach((item) => {
      let ul = document.getElementById("multiTask-ul");
      result += `<li>
                <button type="button" disabled class="block w-full text-start">
                  <div class="flex items-center gap-[5px] text-sm text-black">
                    <!-- سمت راست (نام محصول) -->
                    <span class="whitespace-nowrap">${item.title}</span>

                    <!-- خط وسط با فلکس‌گرو -->
                    <div
                      class="flex-grow border-t border-dashed border-black h-0"
                    ></div>
                    <!-- سمت چپ (قیمت‌ها) -->
                    <span class="ml-2 font-normal whitespace-nowrap">${item.price}</span>
                  </div>
                   <div class="mt-1 text-xs font-light">
                    <p>${item.description}</p>
                  </div>
                </button>
              </li>`;
      ul.innerHTML = result;
    });
  }
  cakeDisplay() {
    let result = `
    <h2
          class="flex items-center text-center text-xl text-gray-800 mt-8"
        >
          <span class="flex-grow h-px bg-[#fffd74] mx-2"></span>
          <span class="bg-[#fffd74] py-1.5 px-4 text-[#0a0aa8] rounded-lg"
            >کیک و دسر</span
          >
          <span class="flex-grow h-px bg-[#fffd74] mx-2"></span>
        </h2>
      `;

    cakeProducts.forEach((item) => {
      result += `        <div class="flex flex-col items-center justify-center bg-white p-4">
          <!-- کروسان ساده -->
          <div class="flex items-center justify-between w-full max-w-3xl">
            <!-- عکس -->
            <img
              src="${item.imageUrl}"
              alt="${item.description}"
              class="w-20 h-auto object-contain"
            />

            <!-- متن و خط -->
            <div class="flex-1 flex flex-col items-start">
              <div class="flex items-center w-full">
                <span class="text-sm font-semibold text-gray-800 ml-2">${item.title}</span>
                
                <div
                  class="flex-grow border-t border-dashed border-black h-0"
                ></div>
                <span class="text-sm font-bold text-gray-800 mx-2">${item.price}</span>
              </div>
              <div class="mt-1 text-xs font-light">
                <p>${item.description}</p>
              </div>
            </div>
          </div>
        </div>`;
      cakeCategory.innerHTML = result;
    });
  }
  brunchDisplay() {
    let result = `
    <h2
          class="flex items-center text-center text-xl text-gray-800 mt-8"
        >
          <span class="flex-grow h-px bg-[#fffd74] mx-2"></span>
          <span class="bg-[#fffd74] py-1.5 px-4 text-[#0a0aa8] rounded-lg"
            >برانچ</span
          >
          <span class="flex-grow h-px bg-[#fffd74] mx-2"></span>
        </h2>
      `;

    brunchProducts.forEach((item) => {
      result += `        <div class="flex flex-col items-center justify-center bg-white p-4">
          <!-- کروسان ساده -->
          <div class="flex items-center justify-between w-full max-w-3xl">
            <!-- عکس -->
            <img
              src="${item.imageUrl}"
              alt="${item.description}"
              class="w-20 h-auto object-contain"
            />

            <!-- متن و خط -->
            <div class="flex-1 flex flex-col items-start">
              <div class="flex items-center w-full">
                <span class="text-sm font-semibold text-gray-800 ml-2">${item.title}</span>
                
                <div
                  class="flex-grow border-t border-dashed border-black h-0"
                ></div>
                <span class="text-sm font-bold text-gray-800 mx-2">${item.price}</span>
              </div>
              <div class="mt-1 text-xs font-light">
                <p>${item.description}</p>
              </div>
            </div>
          </div>
        </div>`;
        brunchCategory.innerHTML = result;
    });
  }
  openingDisplay() {
    let result = `
    <h2
          class="flex items-center text-center text-xl text-gray-800 mt-8"
        >
          <span class="flex-grow h-px bg-[#fffd74] mx-2"></span>
          <span class="bg-[#fffd74] py-1.5 px-4 text-[#0a0aa8] rounded-lg"
            >سامِرتایم!</span
          >
          <span class="flex-grow h-px bg-[#fffd74] mx-2"></span>
        </h2>
      `;

    openingProducts.forEach((item) => {
      result += `<div class="flex flex-col items-center justify-center bg-white p-4">
          <!-- کروسان ساده -->
          <div class="flex items-center justify-between w-full max-w-3xl">
            <!-- عکس -->
            <img
              src="${item.imageUrl}"
              alt="${item.description}"
              class="w-20 h-auto object-contain"
            />

            <!-- متن و خط -->
            <div class="flex-1 flex flex-col items-start">
              <div class="flex items-center w-full">
                <span class="text-sm font-semibold text-gray-800 ml-2">${item.title}</span>
                
                <div
                  class="flex-grow border-t border-dashed border-black h-0"
                ></div>
                <span class="text-sm font-bold text-gray-800 mx-2">${item.price}</span>
              </div>
              <div class="mt-1 text-xs font-light">
                <p>${item.description}</p>
              </div>
            </div>
          </div>
        </div>`;
        openingCategory.innerHTML = result;
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded!");
  new Display().velotoDisplay();
  new Display().mochiDisplay();
  new Display().bubbleTeaDisplay();
  new Display().shakeDisplay();
  new Display().hotDrinksDisplay();
  new Display().teaDisplay();
  new Display().cakeDisplay();
  new Display().brunchDisplay();
  // new Display().multiTaskDisplay();
  // new Display().openingDisplay();


  (function convertEnglishNumbersToPersian() {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

    function toPersianNumber(str) {
      return str.replace(/\d/g, (d) => persianDigits[d]);
    }

    function walkAndReplace(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = toPersianNumber(node.textContent);
      } else if (
        node.nodeType === Node.ELEMENT_NODE &&
        node.tagName !== "SCRIPT" &&
        node.tagName !== "STYLE"
      ) {
        for (let child of node.childNodes) {
          walkAndReplace(child);
        }
      }
    }

    walkAndReplace(document.body);
  })();

  new Display().openModal();
});
