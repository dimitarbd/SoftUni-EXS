import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function Scritps({ reloadScripts, setReloadScripts }) {


    useEffect(() => {

        if (reloadScripts) {
            // setReloadScripts(false);
            // const scripts = [
            //     "/js/jquery-3.3.1.min.js",
            //     "/js/jquery.nice-select.min.js",
            //     "/js/jquery-ui.min.js",
            //     "/js/jquery.slicknav.js",
            //     "/js/mixitup.min.js",
            //     "/js/owl.carousel.min.js",
            //     "/js/bootstrap.min.js",
            //     "/js/main.js"
            // ];
            // scripts.forEach((src) => {
            //     const script = document.createElement("script");
            //     script.src = src;
            //     script.async = true;

            //     document.body.appendChild(script);
            // });
        }
    }, [reloadScripts, setReloadScripts]);

    return (

        <>
            { reloadScripts ?
                (<Helmet>
                <script src="/js/jquery-3.3.1.min.js"></script>
                <script src="/js/bootstrap.min.js"></script>
                <script src="/js/jquery.nice-select.min.js"></script>
                <script src="/js/jquery-ui.min.js"></script>
                <script src="/js/jquery.slicknav.js"></script>
                <script src="/js/mixitup.min.js"></script>
                <script src="/js/owl.carousel.min.js"></script>
                <script src="/js/main.js"></script>
            </Helmet>)
            : (null)
            }
        </>

    );
}