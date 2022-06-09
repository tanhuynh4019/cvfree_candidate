<template>
  <span>
    <v-dialog v-model="dialogShareJob" max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" text dark
          ><i class="mdi mdi-share-variant-outline"></i>
          Chia sẻ
        </v-btn>
      </template>
      <v-card>
        <v-card-title> Chia sẻ qua mạng xã hội </v-card-title>
        <v-card-text
          style="font-size: 15px; font-weight: 400; margin-top: -20px"
        >
          <div class="mt-4">Sao chép đường dẫn</div>
          <v-text-field
            class="border w-100"
            disabled
            clearable
            small
            flat
            solo
            hide-details
            :placeholder="link"
          >
            <template v-slot:append>
              <v-fade-transition leave-absolute>
                <v-btn small class="w-100" dark depressed> Sao chép</v-btn>
              </v-fade-transition>
            </template>
          </v-text-field>
          <v-row class="mt-2">
            <v-col cols="12" sm="4">
              <v-btn
                @click="createShareJobFacebook()"
                :href="`https://www.facebook.com/sharer/sharer.php?u=${link}`"
                _target="_blank"
                depressed
                class="w-100"
                dark
                color="#365899"
              >
                <v-icon left> mdi-facebook </v-icon>
                Facebook
              </v-btn>
            </v-col>
            <v-col cols="12" sm="4">
              <v-btn
                @click="createShareJobGoogle()"
                depressed
                class="w-100"
                dark
                color="#ea4335"
              >
                <v-icon left> mdi-google </v-icon>
                Google
              </v-btn>
            </v-col>
            <v-col cols="12" sm="4">
              <v-btn
                @click="createShareJobLinkein()"
                depressed
                class="w-100"
                dark
                color="#056497"
              >
                <v-icon left> mdi-linkedin </v-icon>
                Linkedin
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar.snackbar" :timeout="timeout" top>
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar.snackbar = false"
        >
          Đóng
        </v-btn>
      </template>
    </v-snackbar>
  </span>
</template>

<script>
import Share from '../../apis/share.api'
export default {
  name: 'ShareFavoriteJob',
  props: ['website', 'user', 'job'],
  async created() {},
  data() {
    return {
      dialogShareJob: false,
      link: window.location.href,
      snackbar: {
        snackbar: false,
        text: '',
      },
      timeout: 2000,
    }
  },
  methods: {
    shareFacebook() {
      window.location.href = ''
    },

    async createShareJobGoogle() {
      let that = this
      const shareGoogle = await Share.shareJob(
        {
          key: 'share',
          status: 'google',
        },
        { slug: that.job.slug }
      )
      if (shareGoogle !== 'Unauthorized') {
        if (!shareGoogle.error) {
          that.snackbar.snackbar = true
          that.snackbar.text = shareGoogle.message
        } else {
          that.snackbar.snackbar = true
          that.snackbar.text = shareGoogle.message
          that.dialogShareJob = false
        }
      }
      if (shareGoogle === 'Unauthorized') {
        const shareGoogleNoUser = await Share.shareJobNoUser(
          {
            key: 'share',
            status: 'google',
          },
          { slug: that.job.slug }
        )
        if (!shareGoogleNoUser.error) {
          that.snackbar.snackbar = true
          that.snackbar.text = shareGoogleNoUser.message
        } else {
          that.snackbar.snackbar = true
          that.snackbar.text = shareGoogleNoUser.message
          that.dialogShareJob = false
        }
      }
    },

    async createShareJobLinkein() {
      let that = this
      const shareLinkein = await Share.shareJob(
        {
          key: 'share',
          status: 'linkedin',
        },
        { slug: that.job.slug }
      )
      if (shareLinkein !== 'Unauthorized') {
        if (!shareLinkein.error) {
          that.snackbar.snackbar = true
          that.snackbar.text = shareLinkein.message
        } else {
          that.snackbar.snackbar = true
          that.snackbar.text = shareLinkein.message
          that.dialogShareJob = false
        }
      }
      if (shareLinkein === 'Unauthorized') {
        const shareLinkeinNoUser = await Share.shareJobNoUser(
          {
            key: 'share',
            status: 'linkedin',
          },
          { slug: that.job.slug }
        )
        if (!shareLinkeinNoUser.error) {
          that.snackbar.snackbar = true
          that.snackbar.text = shareLinkeinNoUser.message
        } else {
          that.snackbar.snackbar = true
          that.snackbar.text = shareLinkeinNoUser.message
          that.dialogShareJob = false
        }
      }
    },

    async createShareJobFacebook() {
      let that = this
      const shareFacebook = await Share.shareJob(
        {
          key: 'share',
          status: 'facebook',
        },
        { slug: that.job.slug }
      )
      if (shareFacebook !== 'Unauthorized') {
        if (!shareFacebook.error) {
          that.snackbar.snackbar = true
          that.snackbar.text = shareFacebook.message
        } else {
          that.snackbar.snackbar = true
          that.snackbar.text = shareFacebook.message
          that.dialogShareJob = false
        }
      }
      if (shareFacebook === 'Unauthorized') {
        const shareFacebookNoUser = await Share.shareJobNoUser(
          {
            key: 'share',
            status: 'facebook',
          },
          { slug: that.job.slug }
        )
        if (!shareFacebookNoUser.error) {
          that.snackbar.snackbar = true
          that.snackbar.text = shareFacebookNoUser.message
        } else {
          that.snackbar.snackbar = true
          that.snackbar.text = shareFacebookNoUser.message
          that.dialogShareJob = false
        }
      }
    },
  },
}
</script>

<style></style>
