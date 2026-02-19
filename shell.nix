{pkgs ? import <nixpkgs> {}}: let
  packages = with pkgs; [
    nodejs_24
  ];
in
  with pkgs;
    mkShell {
      name = "recipe-book.udaltsovk.ru";
      buildInputs = packages;

      DIRENV_LOG_FORMAT = "";
    }
