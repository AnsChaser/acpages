@echo off
cd ../..
call auto-nodev
node src/update.js
PAUSE