const opdList = document.querySelector('#opdList');

let opdData = [
    {
        name:'Dr. Jessica',
        digination:'Neuro Specialist',
        proImg:'assets/fashion-testimon-1.jpg',
        phone:'+880193258',
        patData:[
            {
                name:'Sunil Kumar',
                dNo:'29',
                tag:'M',
                label:2

            },
            {
                name:'Rajib Hosain',
                dNo:'31',
                tag:'M',
                label:4

            }
        ]
    },
    {
        name:'Dr. Uday Kumar',
        digination:'Physiotharapist',
        proImg:'assets/fashion-testimon-2.jpg',
        phone:'+880183258',
        patData:[
            {
                name:'Sankar',
                dNo:'31',
                tag:'M',
                label:2

            },
            {
                name:'bindu',
                dNo:'28',
                tag:'M',
                label:3

            }
        ]
    },
    {
        name:'Dr. Rustam',
        digination:'Psychatrist',
        proImg:'assets/fashion-testimon-3.jpg',
        phone:'+880173258',
        patData:[
            {
                name:'Shankar',
                dNo:'31',
                tag:'M',
                label:2

            },

        ]
    }
]

opdList.innerHTML = opdData.map(jenarateOpd);

function jenarateOpd(e,i) {
    return `
    
    <div class="card">

                <div class="card-header d-flex justify-content-between align-items-center">

                    <div class=" card-header-left d-flex justify-content-center align-items-center w-25 gap-3">

                        <img src="${e.proImg}" class="card-img-top rounded-circle" style="width: 80px;height: 80px;" alt="...">

                        <div class="profile-tags d-flex flex-column justify-content-center">
                            <span class="name h4">${e.name}</span>
                            <span>${e.digination}</span>
                        </div>
                    </div>

                    <div class="card-header-right">
                        <a href="tel:${e.phone}" class="btn call-btn"> <i class="fa-solid fa-phone"></i> Consult</a>
                    </div>

                </div>

                <div id="g${i}" class="list-group list-group-flush">

                    ${
                         e.patData.map((f, l) => {
                            return `

                                <div class="list-group-item pt-4" >

                                <div class="opd-content d-flex justify-content-between align-items-md-center flex-column flex-md-row gap-5">

                                    <div class="opd-name-serial d-flex align-items-center gap-2 ">

                                        <span class=" bg-secondary py-1 px-2 rounded-circle">${l+1}</span>
                                        <span class=" fw-bold">${f.name}</span>
                                        /
                                        <span>${f.dNo}</span>
                                        /
                                        <span>${f.tag}</span>
                                    </div>

                                    <div class="group">

                                        <div class="opd-label-container d-flex align-items-md-center justify-content-between position-relative flex-column flex-md-row">

                                            <div class="progress-bar position-absolute label-${f.label}"></div>

                                            <div class="step-lebel-content label-1 rounded-circle active position-relative" data-label="${f.label}" data-step="1"> 

                                                <div class="label position-absolute">Registation</div>

                                                <i class="fa-solid fa-check fs-16 d-flex justify-content-center align-items-center bg-light rounded-circle"></i>

                                                <i class="fa-solid fa-rotate-right fs-16 d-flex justify-content-center align-items-center bg-light rounded-circle"></i>

                                            </div>

                                            <div class="step-lebel-content label-2 rounded-circle position-relative" data-label="${f.label}" data-step="2">

                                                <div class="label position-absolute">Registation</div>

                                                <i class="fa-solid fa-check fs-16 d-flex justify-content-center align-items-center bg-light rounded-circle"></i>

                                                <i class="fa-solid fa-rotate-right fs-16 d-flex justify-content-center align-items-center bg-light rounded-circle"></i>
                                            </div>

                                            <div class="step-lebel-content label-3 rounded-circle d-active position-relative" data-label="${f.label}" data-step="3">

                                                <div class="label position-absolute">Registation</div>
                                                
                                                <i class="fa-solid fa-check fs-16 d-flex justify-content-center align-items-center bg-light rounded-circle"></i>

                                                <i class="fa-solid fa-rotate-right fs-16 d-flex justify-content-center align-items-center bg-light rounded-circle"></i>
                                            </div>
                                            <div class="step-lebel-content label-4 rounded-circle d-active position-relative" data-label="${f.label}" data-step="4">

                                                <div class="label position-absolute">Registation</div>

                                                <i class="fa-solid fa-check fs-16 d-flex justify-content-center align-items-center bg-light rounded-circle"></i>

                                                <i class="fa-solid fa-rotate-right fs-16 d-flex justify-content-center align-items-center bg-light rounded-circle"></i>
                                            </div>
                                            <div class="step-lebel-content label-5 rounded-circle d-active position-relative" data-label="${f.label}" data-step="5">

                                                <div class="label position-absolute">Registation</div>

                                                <i class="fa-solid fa-check fs-16 d-flex justify-content-center align-items-center bg-light rounded-circle"></i>

                                                <i class="fa-solid fa-rotate-right fs-16 d-flex justify-content-center align-items-center bg-light rounded-circle"></i>
                                            </div>
                                            <div class="step-lebel-content label-6 rounded-circle d-active position-relative" data-label="${f.label}" data-step="6">

                                                <div class="label position-absolute">Registation</div>

                                                <i class="fa-solid fa-check fs-16 d-flex justify-content-center align-items-center bg-light rounded-circle"></i>

                                                <i class="fa-solid fa-rotate-right fs-16 d-flex justify-content-center align-items-center bg-light rounded-circle"></i>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                </div>
                            
                            `
                         })
                    }
                    

                </div>

            </div>

    `


}

let stepLabel = document.querySelectorAll('.step-lebel-content');
for (let item of stepLabel) {
    if (item.dataset.step <= item.dataset.label) {
        item.classList.add('active')
        item.classList.remove('d-active')
    }
    
}

