import React from 'react';

type ChessBoardProps = {

};

type ChessBoardState = {
    chessBoard: Array<any>;
    resetBoard: Array<any>;
    boardIndices: Array<Number>;
    selectedChessPiece: any;
    chessPieces: Object;
    blackGrave: Array<any>;
    whiteGrave: Array<any>;
    playerWhiteTurn: Boolean;
};

export class ChessBoard extends React.Component<ChessBoardProps, ChessBoardState> {
    state: ChessBoardState = {
        chessBoard: [],
        resetBoard: [],
        boardIndices: [0,1,2,3,4,5,6,7,8],
        selectedChessPiece: null,
        chessPieces: {},
        blackGrave: [],
        whiteGrave: [],
        playerWhiteTurn: true
    }

    componentDidMount () {
        this.initChessBoard();
        this.initChessPieces();
    };

    initChessBoard () {
        const ranks = 9;
        const files = 9;

        let chessBoard = [];
        for (let rank = 0; rank < ranks; rank++) {
            let chessBoardFiles = {};
            for (let file = 0; file < files; file++) {
                let id = rank.toString() + file.toString();
                chessBoardFiles[id] = {active: false};
            };
            chessBoard.push(chessBoardFiles);
        };
        this.setState({chessBoard: chessBoard, resetBoard: chessBoard});
    };

    initChessPieces () {
        const ranks = 8;
        const files = 8;

        let chessPieces = {};
        for (let rank = 0; rank < ranks; rank++) {
            for (let file = 0; file < files; file++) {
                let id = rank.toString() + file.toString();
                if (rank === 0) {
                    switch (file) {
                        case 0:
                            chessPieces[id] = {type:'rook', rank: rank, file: file, id: id, color: 'black'};
                            break;
                        case 1:
                            chessPieces[id] = {type:'knight', rank: rank, file: file, id: id, color: 'black'};
                            break;
                        case 2:
                            chessPieces[id] = {type:'bishop', rank: rank, file: file, id: id, color: 'black'};
                            break;
                        case 3:
                            chessPieces[id] = {type:'queen', rank: rank, file: file, id: id, color: 'black'};
                            break;
                        case 4:
                            chessPieces[id] = {type:'king', rank: rank, file: file, id: id, color: 'black'};
                            break;
                        case 5:
                            chessPieces[id] = {type:'bishop', rank: rank, file: file, id: id, color: 'black'};
                            break;
                        case 6:
                            chessPieces[id] = {type:'knight', rank: rank, file: file, id: id, color: 'black'};
                            break;
                        case 7:
                            chessPieces[id] = {type:'rook', rank: rank, file: file, id: id, color: 'black'};
                            break;
                    }
                } else if (rank === 1) {
                    chessPieces[id] = {type:'pawn', rank: rank, file: file, id: id, color: 'black'};
                } else if (rank === 6) {
                    chessPieces[id] = {type:'pawn', rank: rank, file: file, id: id, color: 'white'};
                } else if (rank === 7) {
                    switch (file) {
                        case 0:
                            chessPieces[id] = {type:'rook', rank: rank, file: file, id: id, color: 'white'};
                            break;
                        case 1:
                            chessPieces[id] = {type:'knight', rank: rank, file: file, id: id, color: 'white'};
                            break;
                        case 2:
                            chessPieces[id] = {type:'bishop', rank: rank, file: file, id: id, color: 'white'};
                            break;
                        case 3:
                            chessPieces[id] = {type:'queen', rank: rank, file: file, id: id, color: 'white'};
                            break;
                        case 4:
                            chessPieces[id] = {type:'king', rank: rank, file: file, id: id, color: 'white'};
                            break;
                        case 5:
                            chessPieces[id] = {type:'bishop', rank: rank, file: file, id: id, color: 'white'};
                            break;
                        case 6:
                            chessPieces[id] = {type:'knight', rank: rank, file: file, id: id, color: 'white'};
                            break;
                        case 7:
                            chessPieces[id] = {type:'rook', rank: rank, file: file, id: id, color: 'white'};
                            break;
                    }
                }
            }
        };

        this.setState({chessPieces: chessPieces});
    };

    drawBoardIndexs (rank, file) {
        if (rank === 8) {
            return <p>{file}</p>;
        } else if (file === 8) {
            return <p>{rank}</p>;
        }
    };

    setSelectedChessPiece (piece) {
        this.setState({selectedChessPiece: piece});
    };

    drawChessPiece (piece, rank, file) {
        if (piece.rank === rank && piece.file === file) {
            if (piece.type === 'knight') {
                if (piece.color === 'black') {
                    return (
                        <button disabled={piece.color === 'black' && this.state.playerWhiteTurn === true} style={{width: '100%', height: '100%', backgroundColor: 'transparent', border: piece.color === 'black' ? '5px solid #888':'5px solid #eee'}} onClick={() => this.setSelectedChessPiece(piece)} key={piece}>
                            <p>N</p>
                        </button>
                    )
                } else {
                    return (
                        <button disabled={piece.color === 'white' && this.state.playerWhiteTurn !== true} style={{width: '100%', height: '100%', backgroundColor: 'transparent', border: piece.color === 'black' ? '5px solid #888':'5px solid #eee'}} onClick={() => this.setSelectedChessPiece(piece)} key={piece}>
                            <p>N</p>
                        </button>
                    )
                }
            } else {
                if (piece.color === 'black') {
                    return (
                        <button disabled={piece.color === 'black' && this.state.playerWhiteTurn === true} style={{width: '100%', height: '100%', backgroundColor: 'transparent', border: piece.color === 'black' ? '5px solid #888':'5px solid #eee'}} onClick={() => this.setSelectedChessPiece(piece)} key={piece}>
                            <p>{piece.type[0].toUpperCase()}</p>
                        </button>
                    )
                } else {
                    return (
                        <button disabled={piece.color === 'white' && this.state.playerWhiteTurn !== true} style={{width: '100%', height: '100%', backgroundColor: 'transparent', border: piece.color === 'black' ? '5px solid #888':'5px solid #eee'}} onClick={() => this.setSelectedChessPiece(piece)} key={piece}>
                            <p>{piece.type[0].toUpperCase()}</p>
                        </button>
                    )
                }
            }
        }
    };

    highlightLTiles(chessPiece, board) {
        const top1 = chessPiece.rank - 1;
        const bottom1 = chessPiece.rank + 1;
        const top2 = chessPiece.rank - 2;
        const bottom2 = chessPiece.rank + 2;
        const left1 = chessPiece.file + 1;
        const right1 = chessPiece.file - 1;
        const left2 = chessPiece.file + 2;
        const right2 = chessPiece.file - 2;

        const postitionTL2 = top2.toString() + left1.toString();
        const postitionTR2 = top2.toString() + right1.toString();
        const postitionBL2 = bottom2.toString() + left1.toString();
        const postitionBR2 = bottom2.toString() + right1.toString();

        const postitionTL1 = top1.toString() + left2.toString();
        const postitionTR1 = top1.toString() + right2.toString();
        const postitionBL1 = bottom1.toString() + left2.toString();
        const postitionBR1 = bottom1.toString() + right2.toString();

        // TL2
        if (top2 < 8 && top2 > -1 && left1 < 8 && left1 > -1) {
            if (this.state.chessPieces[postitionTL2]) {
                if (this.state.chessPieces[postitionTL2].color !== chessPiece.color) {
                    board[top2][postitionTL2].active = true;
                }
            } else {
                board[top2][postitionTL2].active = true;
            }
        }

        // TR2
        if (top2 < 8 && top2 > -1 && right1 < 8 && right1 > -1) {
            if (this.state.chessPieces[postitionTR2]) {
                if (this.state.chessPieces[postitionTR2].color !== chessPiece.color) {
                    board[top2][postitionTR2].active = true;
                }
            } else {
                board[top2][postitionTR2].active = true;
            }
        }

        // BL2
        if (bottom2 < 8 && bottom2 > -1 && left1 < 8 && left1 > -1) {
            if (this.state.chessPieces[postitionBL2]) {
                if (this.state.chessPieces[postitionBL2].color !== chessPiece.color) {
                    board[bottom2][postitionBL2].active = true;
                }
            } else {
                board[bottom2][postitionBL2].active = true;
            }
        }

        // BR2
        if (bottom2 < 8 && bottom2 > -1 && right1 < 8 && right1 > -1) {
            if (this.state.chessPieces[postitionBR2]) {
                if (this.state.chessPieces[postitionBR2].color !== chessPiece.color) {
                    board[bottom2][postitionBR2].active = true;
                }
            } else {
                board[bottom2][postitionBR2].active = true;
            }
        }

        // -----

        // TL1
        if (top1 < 8 && top1 > -1 && left2 < 8 && left2 > -1) {
            if (this.state.chessPieces[postitionTL1]) {
                if (this.state.chessPieces[postitionTL1].color !== chessPiece.color) {
                    board[top1][postitionTL1].active = true;
                }
            } else {
                board[top1][postitionTL1].active = true;
            }
        }

        // TR1
        if (top1 < 8 && top1 > -1 && right2 < 8 && right2 > -1) {
            if (this.state.chessPieces[postitionTR1]) {
                if (this.state.chessPieces[postitionTR1].color !== chessPiece.color) {
                    board[top1][postitionTR1].active = true;
                }
            } else {
                board[top1][postitionTR1].active = true;
            }
        }

        // BL1
        if (bottom1 < 8 && bottom1 > -1 && left2 < 8 && left2 > -1) {
            if (this.state.chessPieces[postitionBL1]) {
                if (this.state.chessPieces[postitionBL1].color !== chessPiece.color) {
                    board[bottom1][postitionBL1].active = true;
                }
            } else {
                board[bottom1][postitionBL1].active = true;
            }
        }

        // BR1
        if (bottom1 < 8 && bottom1 > -1 && right2 < 8 && right2 > -1) {
            if (this.state.chessPieces[postitionBR1]) {
                if (this.state.chessPieces[postitionBR1].color !== chessPiece.color) {
                    board[bottom1][postitionBR1].active = true;
                }
            } else {
                board[bottom1][postitionBR1].active = true;
            }
        }
    };

    checkPawnKill(chessPiece, board) {
        let rank = chessPiece.rank;
        const left = chessPiece.file - 1;
        const right = chessPiece.file + 1;
        if (chessPiece.color === 'white') {
            rank -= 1;
        } else {
            rank += 1;
        }

        const positionL = rank.toString() + left.toString();
        const positionR = rank.toString() + right.toString();

        if (this.state.chessPieces[positionL] && this.state.chessPieces[positionL].color !== chessPiece.color) {
            board[rank][positionL].active = true;
        }

        if (this.state.chessPieces[positionR] && this.state.chessPieces[positionR].color !== chessPiece.color) {
            board[rank][positionR].active = true;
        }
    };

    highlightTiles(chessPiece, board, amount, type) {
        let hasPiece = false;
        let counter = 0;
        let rank = chessPiece.rank;
        let file = chessPiece.file;

        while (true) {
            if (type === 'North') {
                rank -= 1;
            } else if (type === 'East') {
                file += 1;
            } else if (type === 'South') {
                rank += 1;
            } else if (type === 'West') {
                file -= 1;
            } else if (type === 'North East') {
                rank -= 1;
                file += 1;
            } else if (type === 'South East') {
                rank += 1;
                file += 1;
            } else if (type === 'North West') {
                rank -= 1;
                file -= 1;
            } else if (type === 'South West') {
                rank += 1;
                file -= 1;
            }

            let postition = rank.toString() + file.toString();
            if (rank === -1 || rank === 8 || file === -1 || file === 8 || counter === amount) {
                break;
            } else if (this.state.chessPieces[postition] && this.state.chessPieces[postition].rank === rank && this.state.chessPieces[postition].file === file) {
                if (hasPiece === false && this.state.chessPieces[postition].color !== chessPiece.color && chessPiece.type !== 'pawn') {
                    // hasPiece == false && this.state.chessPieces[postition].color !== chessPiece.color
                    board[rank][postition].active = true;
                    hasPiece = true;
                }
                break;
            } else {
                
                board[rank][postition].active = true;
            }
            counter += 1;
        }
    };

    resetBoard () {
        const ranks = 9;
        const files = 9;
        let board = this.state.chessBoard;
        for (let rank = 0; rank < ranks; rank++) {
            for (let file = 0; file < files; file++) {
                let id = rank.toString() + file.toString();
                board[rank][id].active = false;
            };
        };

        this.setState({chessBoard:board});
    };

    drawChessBoard (rank, file) {
        const id = rank.toString() + file.toString();
        let board = this.state.chessBoard;

        if (board[rank][id].active === true) {
            this.setState({playerWhiteTurn: !this.state.playerWhiteTurn});
            const oldId = this.state.selectedChessPiece.id;
            let copyChessPieces = {...this.state.chessPieces};
            copyChessPieces[this.state.selectedChessPiece.id].rank = rank;
            copyChessPieces[this.state.selectedChessPiece.id].file = file;

            if (copyChessPieces[id]) {
                if (copyChessPieces[id].color === 'black') {
                    this.state.blackGrave.push(copyChessPieces[id]);
                } else {
                    this.state.whiteGrave.push(copyChessPieces[id]);
                }
            }

            copyChessPieces[id] = this.state.selectedChessPiece;
            copyChessPieces[id].id = id;

            delete copyChessPieces[oldId];

            this.setState({selectedChessPiece: null, chessPieces: copyChessPieces});
            this.resetBoard();
        } else {
            let chessPiece = this.state.chessPieces[id];
            this.resetBoard();
            if (chessPiece !== undefined) {
                if (chessPiece.type === 'pawn' && chessPiece.color === 'white') {
                    if (rank === 6) {
                        this.highlightTiles(chessPiece, board, 2, 'North');
                    } else {
                        this.highlightTiles(chessPiece, board, 1, 'North');
                    }
                    this.checkPawnKill(chessPiece, board);
                } else if (chessPiece.type === 'pawn' && chessPiece.color === 'black') {
                    if (rank === 1) {
                        this.highlightTiles(chessPiece, board, 2, 'South');
                    } else {
                        this.highlightTiles(chessPiece, board, 1, 'South');
                    }
                    this.checkPawnKill(chessPiece, board);
                } else if (chessPiece.type === 'rook') {
                    this.highlightTiles(chessPiece, board, Infinity, 'North');
                    this.highlightTiles(chessPiece, board, Infinity, 'East');
                    this.highlightTiles(chessPiece, board, Infinity, 'South');
                    this.highlightTiles(chessPiece, board, Infinity, 'West');
                } else if (chessPiece.type === 'knight') {
                    this.highlightLTiles(chessPiece, board);
                } else if (chessPiece.type === 'bishop') {
                    this.highlightTiles(chessPiece, board, Infinity, 'North East');
                    this.highlightTiles(chessPiece, board, Infinity, 'North West');
                    this.highlightTiles(chessPiece, board, Infinity, 'South East');
                    this.highlightTiles(chessPiece, board, Infinity, 'South West');
                } else if (chessPiece.type === 'queen') {
                    this.highlightTiles(chessPiece, board, Infinity, 'North');
                    this.highlightTiles(chessPiece, board, Infinity, 'East');
                    this.highlightTiles(chessPiece, board, Infinity, 'South');
                    this.highlightTiles(chessPiece, board, Infinity, 'West');
    
                    this.highlightTiles(chessPiece, board, Infinity, 'North East');
                    this.highlightTiles(chessPiece, board, Infinity, 'North West');
                    this.highlightTiles(chessPiece, board, Infinity, 'South East');
                    this.highlightTiles(chessPiece, board, Infinity, 'South West');
                } else { // king
                    this.highlightTiles(chessPiece, board, 1, 'North');
                    this.highlightTiles(chessPiece, board, 1, 'East');
                    this.highlightTiles(chessPiece, board, 1, 'South');
                    this.highlightTiles(chessPiece, board, 1, 'West');
                    
                    this.highlightTiles(chessPiece, board, 1, 'North East');
                    this.highlightTiles(chessPiece, board, 1, 'North West');
                    this.highlightTiles(chessPiece, board, 1, 'South East');
                    this.highlightTiles(chessPiece, board, 1, 'South West');
                }
    
                this.setState({chessBoard:board});
            }
        }
    };

    render () {
        return (
            <div style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', margin: '0 auto 0 auto', width: '900px'}}>
                        <div style={{
                            width: '4em', 
                            height: '4em', 
                            border: '1px solid black',
                        }}>
                            <button style={{width: '100%', height: '100%', backgroundColor: 'transparent', border: '5px solid #888'}}>
                                <p>+</p>
                            </button>
                        </div>
                        {this.state.blackGrave.map((piece, i) => (
                            <div key={i} style={{
                                width: '4em', 
                                height: '4em', 
                                border: '1px solid black'
                            }}>
                                <button style={{width: '100%', height: '100%', backgroundColor: 'transparent', border: piece.color === 'black' ? '5px solid #888':'5px solid #eee'}} key={i}>
                                    <p>{piece.type[0].toUpperCase()}</p>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div style={{margin: 'auto'}}>
                        {this.state.chessBoard.map((ranks, rank) => (
                            <div style={{display:'flex'}} key={rank}>
                                {Object.values(ranks).map((files, file) => (
                                    <div onClick={() => {this.drawChessBoard(rank, file)}} key={file} style={{
                                            width: '4em', 
                                            height: '4em', 
                                            border: '1px solid black', 
                                            backgroundColor: this.state.chessBoard[rank][rank.toString()+file.toString()].active ? '#ddd':'white'
                                        }}>
                                        {this.drawBoardIndexs(rank, file)}
                                        {Object.values(this.state.chessPieces).map((piece) => (
                                            this.drawChessPiece(piece, rank, file)
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div style={{display: 'flex', margin: '0 auto 0 auto', width: '900px'}}>
                        <div style={{
                            width: '4em', 
                            height: '4em', 
                            border: '1px solid black',
                        }}>
                            <button style={{width: '100%', height: '100%', backgroundColor: 'transparent', border: '5px solid #eee'}}>
                                <p>+</p>
                            </button>
                        </div>
                        {this.state.whiteGrave.map((piece, i) => (
                            <div key={i} style={{
                                width: '4em', 
                                height: '4em', 
                                border: '1px solid black',
                            }}>
                                <button style={{width: '100%', height: '100%', backgroundColor: 'transparent', border: piece.color === 'black' ? '5px solid #888':'5px solid #eee'}} key={i}>
                                    <p>{piece.type[0].toUpperCase()}</p>
                                </button>
                            </div>
                        ))}
                    </div>
            </div>
        );
    }
};