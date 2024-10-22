cmake_minimum_required(VERSION 3.29)
project(01_educative_cpp_basics)

set(CMAKE_CXX_STANDARD 20)

add_executable(
  getting-started
  01-getting-started/hello_world.cpp
  03-data-types-and-input/data_types.cpp
)
add_executable(
  variables-and-constants
  02-variables-and-constants/variable_and_constant_practice.cpp
)
