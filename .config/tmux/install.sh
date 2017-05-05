#! /bin/bash
#
# install.sh
# Copyright (C) 2017 Ariel De Ocampo <arielmakestuff@gmail.com>
#
# Distributed under terms of the MIT license.
#

function dirname
{
    python3.6 -c "import os.path as op;print(op.dirname(op.abspath('$1')))"
}

CONFIG_DIR=$(dirname $0)

ln -s $CONFIG_DIR/tmux.conf $HOME/.tmux.conf
