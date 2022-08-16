<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CvProfile from "./CvProfile/CvProfile.vue";
import { CvOptionsDoc, createEmptyCvOptions } from "../types/db/Options/CvOptions.type";
import { db } from "@/util/firebase";
import config from "@/util/config";

@Options({
  components: {
    CvProfile,
  },
  data() {
    return {
      CvOptions: {} as CvOptionsDoc,
      loading: true,
    }
  },
  async beforeMount() {
    this.loading = true
    const conf =  config.get()
    const dbVersion = conf.db.version;
    const CvPath = conf.db.CvPath;
    const CvOptionsDoc = await db.doc(`${dbVersion}/${this.$User().uid}/${CvPath}/CvOptions`).get()
    if (CvOptionsDoc.exists) {
      this.CvOptions = CvOptionsDoc.data()
    } else {
      this.CvOptions = createEmptyCvOptions()
    }
    this.loading = false
  }
})
export default class CvMain extends Vue {}
</script>

<template>
  <body id="top">
    <div class="page-content">
      <div class="container">
        <CvProfile  />
        <hr class="d-print-none" />
        <div class="skills-section px-3 px-lg-4">
          <h2 class="h3 mb-3">Skills Highlight</h2>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-2">
                <span>HTML</span>
                <div class="progress my-1">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 90%"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="mb-2">
                <span>CSS</span>
                <div class="progress my-1">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 85%"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="mb-2">
                <span>JavaScript</span>
                <div class="progress my-1">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 75%"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-2">
                <span>Adobe Photoshop</span>
                <div class="progress my-1">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style="width: 80%"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="mb-2">
                <span>Sketch</span>
                <div class="progress my-1">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style="width: 85%"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="mb-2">
                <span>Adobe XD</span>
                <div class="progress my-1">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style="width: 75%"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="d-print-none" />
        <div class="skills-section px-3 px-lg-4">
          <h2 class="h3 mb-3">Other Skills</h2>
          <div class="row">
            <div class="col-sm">
              Skill 1
              <span>&#9900;</span>
              Skill 2
              <span>&#9900;</span>
              Skill 3
            </div>
          </div>
        </div>
        <hr class="d-print-none pt-3" />
        <div class="work-experience-section px-3 px-lg-4">
          <h2 class="h3 mb-4">Work Experience</h2>
          <div class="timeline">
            <div class="timeline-card timeline-card-primary card shadow-sm">
              <div class="card-body">
                <div class="h5 mb-1">
                  Frontend Developer
                  <span class="text-muted h6">at Creative Agency</span>
                </div>
                <div class="text-muted text-small mb-2">
                  May, 2015 - Present
                </div>
                <div>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition.
                </div>
              </div>
            </div>
            <div class="timeline-card timeline-card-primary card shadow-sm">
              <div class="card-body">
                <div class="h5 mb-1">
                  Graphic Designer
                  <span class="text-muted h6">at Design Studio</span>
                </div>
                <div class="text-muted text-small mb-2">
                  June, 2013 - May, 2015
                </div>
                <div>
                  Override the digital divide with additional clickthroughs from
                  DevOps. Nanotechnology immersion along the information highway
                  will close the loop on focusing solely on the bottom line.
                </div>
              </div>
            </div>
            <div class="timeline-card timeline-card-primary card shadow-sm">
              <div class="card-body">
                <div class="h5 mb-1">
                  Junior Web Developer
                  <span class="text-muted h6">at Indie Studio</span>
                </div>
                <div class="text-muted text-small mb-2">
                  Jan, 2011 - May, 2013
                </div>
                <div>
                  User generated content in real-time will have multiple
                  touchpoints for offshoring. Organically grow the holistic
                  world view of disruptive innovation via workplace diversity
                  and empowerment.
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="d-print-none" />
        <div class="page-break"></div>
        <div class="education-section px-3 px-lg-4 pb-4">
          <h2 class="h3 mb-4">Education</h2>
          <div class="timeline">
            <div class="timeline-card timeline-card-success card shadow-sm">
              <div class="card-body">
                <div class="h5 mb-1">
                  Masters in Information Technology
                  <span class="text-muted h6"
                    >from International University</span
                  >
                </div>
                <div class="text-muted text-small mb-2">2011 - 2013</div>
                <div>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition.
                </div>
              </div>
            </div>
            <div class="timeline-card timeline-card-success card shadow-sm">
              <div class="card-body">
                <div class="h5 mb-1">
                  Bachelor of Computer Science
                  <span class="text-muted h6">from Regional College</span>
                </div>
                <div class="text-muted text-small mb-2">2007 - 2011</div>
                <div>
                  Override the digital divide with additional clickthroughs from
                  DevOps. Nanotechnology immersion along the information highway
                  will close the loop on focusing solely on the bottom line.
                </div>
              </div>
            </div>
            <div class="timeline-card timeline-card-success card shadow-sm">
              <div class="card-body">
                <div class="h5 mb-1">
                  Science and Mathematics
                  <span class="text-muted h6">from Mt. High Scool</span>
                </div>
                <div class="text-muted text-small mb-2">1995 - 2007</div>
                <div>
                  User generated content in real-time will have multiple
                  touchpoints for offshoring. Organically grow the holistic
                  world view of disruptive innovation via workplace diversity
                  and empowerment.
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="d-print-none" />
        <div class="contant-section px-3 px-lg-4 pb-4" id="contact">
          <div class="row">
            <div class="col-md-7 d-print-none">
              <h2 class="h3 text mb-3 center">Contact</h2>
            </div>
            <div class="col">
              <div class="mt-2">
                <h3 class="h6">Address</h3>
                <div class="pb-2 text-secondary">
                  140, City Center, New York, U.S.A
                </div>
                <h3 class="h6">Phone</h3>
                <div class="pb-2 text-secondary">+0718-111-0011</div>
                <h3 class="h6">Email</h3>
                <div class="pb-2 text-secondary">Joyce@company.com</div>
              </div>
            </div>
            <div class="col d-none d-print-block">
              <div class="mt-2">
                <div>
                  <div class="mb-2">
                    <div class="text-dark">
                      <i class="fab fa-twitter mr-1"></i
                      ><span>https://twitter.com/templateflip</span>
                    </div>
                  </div>
                  <div class="mb-2">
                    <div class="text-dark">
                      <i class="fab fa-facebook mr-1"></i
                      ><span>https://www.facebook.com/templateflip</span>
                    </div>
                  </div>
                  <div class="mb-2">
                    <div class="text-dark">
                      <i class="fab fa-instagram mr-1"></i
                      ><span>https://www.instagram.com/templateflip</span>
                    </div>
                  </div>
                  <div class="mb-2">
                    <div class="text-dark">
                      <i class="fab fa-github mr-1"></i
                      ><span>https://github.com/templateflip</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-4 pb-4 text-muted text-center d-print-none">
      <div class="container">
        <div class="text-small">
          <div class="mb-1">&copy; Generated by mResume.</div>
          <div>
            Design -
            <a href="https://templateflip.com/" target="_blank">TemplateFlip</a>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Buttons */
/* Inputs */
/* Timeline custom component */
:deep(.timeline) {
  border-left: 2px solid #e6e9ed;
  padding: 1rem 0;
}

:deep(.timeline-card) {
  position: relative;
  margin-left: 31px;
  border-left: 2px solid;
  margin-bottom: 2rem;
}

:deep(.timeline-card:last-child) {
  margin-bottom: 1rem;
}

:deep(.timeline-card:before) {
  content: "";
  display: inline-block;
  position: absolute;
  background-color: #fff;
  border-radius: 10px;
  width: 12px;
  height: 12px;
  top: 20px;
  left: -41px;
  border: 2px solid;
  z-index: 2;
}

:deep(.timeline-card:after) {
  content: "";
  display: inline-block;
  position: absolute;
  background-color: currentColor;
  width: 29px;
  height: 2px;
  top: 25px;
  left: -29px;
  z-index: 1;
}

:deep(.timeline-card-primary) {
  border-left-color: #4a89dc;
}

:deep(.timeline-card-primary:before) {
  border-color: #4a89dc;
}

:deep(.timeline-card-primary:after) {
  background-color: #4a89dc;
}

:deep(.timeline-card-success) {
  border-left-color: #37bc9b;
}

:deep(.timeline-card-success:before) {
  border-color: #37bc9b;
}

:deep(.timeline-card-success:after) {
  background-color: #37bc9b;
}

:deep(html) {
  scroll-behavior: smooth;
}

:deep(.site-title) {
  font-size: 1.25rem;
  line-height: 2.5rem;
}

:deep(.nav-link) {
  padding: 0;
  font-size: 1.25rem;
  line-height: 2.5rem;
  color: rgba(0, 0, 0, 0.5);
}

:deep(.nav-link:hover, .nav-link:focus, .active .nav-link) {
  color: rgba(0, 0, 0, 0.8);
}

:deep(.nav-item + .nav-item) {
  margin-left: 1rem;
}

:deep(.cover) {
  border-radius: 10px;
}

:deep(.cover-bg) {
  background-color: #4a89dc;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.12'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  border-radius: 10px 10px 0 0;
}

:deep(.avatar) {
  max-width: 216px;
  max-height: 216px;
  margin-top: 20px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

:deep(.avatar img) {
  /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

:deep(footer a:not(.nav-link)) {
  color: inherit;
  border-bottom: 1px dashed;
  text-decoration: none;
  cursor: pointer;
}

@media (min-width: 48em) {
  :deep(.site-title) {
    float: left;
  }
  :deep(.site-nav) {
    float: right;
  }
  :deep(.avatar) {
    margin-bottom: -80px;
    margin-left: 0;
  }
}
</style>
