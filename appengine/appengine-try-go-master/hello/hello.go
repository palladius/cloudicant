package hello

import (
    "fmt"
    "net/http"
)

func init() {
    http.HandleFunc("/", handler)
}

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "Hello world (on GAE/Go)! <br/>PS If you know nothing about Go, please <i>go get it</i>!")
}
