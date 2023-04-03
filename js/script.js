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
  const length = parseInt(document.getElementById('length-of-pyramid').value)
  const width = parseInt(document.getElementById('width-of-pyramid').value)
  const height = parseInt(document.getElementById('height-of-pyramid').value)

  // process
  const volume = (length * width * height)  / 3 

  // outputoutputoutput
  document.getElementById('area').innerHTML = 'volume is: ' + volume + ' cm³'
}
