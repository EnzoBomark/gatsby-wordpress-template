<?php
function toSnakeCase($string) 
{
  return strtolower(str_replace(' ', '_', $string));
}
