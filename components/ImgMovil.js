import React from 'react'

function ImgMovil() {
    const key = new Date().getTime();
    const posiciones = (idx) => {
        let pos = []

        const getRandom = (min, max, except = []) => {
            let nro = Math.floor(Math.random() * (max + 1 - min) + min);
            while (except.includes(nro)) {
                nro = Math.floor(Math.random() * (max + 1 - min) + min);
            }
            return nro;
        }

        const getLado = (nro) => {
            if (nro === 0) {
                return ["top", "0vh"]
            } else if (nro === 1) {
                return ["left", "0vw"]
            } else if (nro === 2) {
                return ["left", "calc(100vw - 40px)"]
            } else if (nro === 3) {
                return ["top", "calc(100vh - 40px)"]
            }
        }

        const getLadoRestante = (lado) => {
            const r = getRandom(0, 1);
            if (lado === "top") {
                return [["left", "right"][r], "vw"]
            } else if (lado === "left") {
                return [["top", "bottom"][r], "vh"]
            }
        }
        const [inicio1, inicio2] = [getRandom(0, 90), getRandom(0, 90)]
        const pasos = () => {
            if (pos.length === 0 || pos.length >= 5) {
                pos.push(-1);
                return [
                    "left:" + inicio1 + "vw;",
                    "top:" + inicio2 + "vh;"
                ]
            }
            const nro = getRandom(0, 3, pos)
            pos.push(nro)

            const l1 = getLado(nro);
            const l2 = getLadoRestante(l1[0]);



            return [
                l1[0] + ": " + l1[1] + ";",
                l2[0] + ": " + getRandom(0, 100) + l2[1] + ";"
            ]
        }
        let p1, p2;
        const movimientos = Array(4 + 2).fill(0).map((_, idx) => {
            const p = pasos();
            if (idx == 0) {
                p1 = p[0];
                p2 = p[1];
                return (`
				0%{
					${p[0]}
					${p[1]}
				}
			`)
            }
            if (idx == 5) return (`
				100%{
					${p[0]}
					${p[1]}
				}
			`);

            return (`
				${Math.floor((100 / 5) * idx)}%{
					${p[0]}
					${p[1]}
				}

			`)
        })
        return `
		.img${key}{
			border-radius: 40%;
			border: 2px solid black !important;
			position: absolute;
			animation-name: recorrido${key}";
			animation-duration: 5s;
			animation-timing-function: linear;
			animation-iteration-count: infinite;
			${p1}
			${p2}
			
		}
		
		@keyframes recorrido${key}{
			${movimientos.join("")}
		}
		`
    }

    const st = `${posiciones()}`

    return (
        <>
            <img
                className={"img"+key}
                src="/images/profile.jpg"
                height={40}
                width={40}
                alt="Your Name"
            />
            <style jsx>{st}</style>
        </>
    )
}

export default ImgMovil


/*
const posiciones = (idx) => {
		let pos = []

		const getRandom = (min, max, except = []) => {
			let nro = Math.floor(Math.random() * (max + 1 - min) + min);
			while (except.includes(nro)) {
				nro = Math.floor(Math.random() * (max + 1 - min) + min);
			}
			return nro;
		}

		const getLado = (nro) => {
			if (nro === 0) {
				return ["top", "0vh"]
			} else if (nro === 1) {
				return ["left", "0vw"]
			} else if (nro === 2) {
				return ["left", "calc(100vw - 40px)"]
			} else if (nro === 3) {
				return ["top", "calc(100vh - 40px)"]
			}
		}

		const getLadoRestante = (lado) => {
			console.log(lado)
			const r = getRandom(0, 1);
			if (lado === "top") {
				return [["left", "right"][r], "vw"]
			} else if (lado === "left") {
				return [["top", "bottom"][r], "vh"]
			}
		}
		const [inicio1, inicio2] = [getRandom(0, 90), getRandom(0, 90)]
		const pasos = () => {
			if (pos.length === 0 || pos.length >= 5) {
				pos.push(-1);
				return [
					"left:" + inicio1 + "vw;",
					"top:" + inicio2 + "vh;"
				]
			}
			const nro = getRandom(0, 3, pos)
			pos.push(nro)

			const l1 = getLado(nro);
			const l2 = getLadoRestante(l1[0]);



			return [
				l1[0] + ": " + l1[1] + ";",
				l2[0] + ": " + getRandom(0, 100) + l2[1] + ";"
			]
		}
		let p1,p2;
		const movimientos = Array(4 + 2).fill(0).map((_, idx) => {
			const p = pasos();
			if (idx == 0) {
				p1=p[0];
				p2=p[1];
				return (`
				0%{
					${p[0]}
					${p[1]}
				}
			`)
			}
			if (idx == 5) return (`
				100%{
					${p[0]}
					${p[1]}
				}
			`);

			return (`
				${Math.floor((100 / 5) * idx)}%{
					${p[0]}
					${p[1]}
				}

			`)
		})
		return `
		.img{
			border-radius: 40%;
			border: 2px solid black !important;
			position: relative;
			animation-name: recorrido;
			animation-duration: 5s;
			animation-timing-function: linear;
			animation-iteration-count: infinite;
			${p1}
			${p2}
			
		}
		
		@keyframes recorrido{
			${movimientos.join("")}
		}
		`
	}
*/