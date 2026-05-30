function setMode(mode) {
            const btnOriginal = document.getElementById('btn-original');
            const btnCorrected = document.getElementById('btn-corrected');

            if (mode === 'corrected') {
                document.body.classList.add('is-corrected');
                btnCorrected.classList.add('active');
                btnOriginal.classList.remove('active');
            } else {
                document.body.classList.remove('is-corrected');
                btnOriginal.classList.add('active');
                btnCorrected.classList.remove('active');
            }
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.section-fade').forEach(el => observer.observe(el));
