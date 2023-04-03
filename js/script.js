// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: March 2023
// This file contains the JS functions for index.html 

'use strict'
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate () {
  // input
  const abase = parseInt(document.getElementById('a-base-of-trapezoid').value)
  const bbase = parseInt(document.getElementById('b-base-of-trapezoid').value)
  const height = parseInt(document.getElementById('height-of-trapezoid').value)

  // process
  const area = [(abase + bbase) / 2] * height

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
