#!/bin/sh

git checkout master
git pull

git branch -D prod
git push origin :prod
git fetch -p
git branch prod
git checkout prod
grunt build

git add -f wp-content/*/my-project-*/css/*
git add -f wp-content/*/my-project-*/js/prod/*

now=$(date +"%Y-%m-%d-%S")

git commit -m "Production build ($now)"
git push

git checkout master
grunt build
