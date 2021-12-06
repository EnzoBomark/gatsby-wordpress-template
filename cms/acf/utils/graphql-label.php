<?php
require_once('to-title-case.php');

function graphql_label($label) 
{
  return [
    'key' => $label . 'label',
    'label' => 'Label',
    'name' => 'label',
    'type' => 'text',
    'show_in_graphql' => 1,
    'default_value' => toTitleCase($label),
    'conditional_logic' => [[[
      'field' => 'components',
      'operator' => '==empty',
    ]]]
  ];
}