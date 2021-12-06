<?php
function toTitleCase($string) 
{
  return str_replace(' ', '', ucwords($string));
}
