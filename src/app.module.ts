import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { RolesController } from './controllers/roles.controller';
import { RolesService } from './services/roles.service';
import { RolSchema } from './schemas/rol.schema';
import { UserSchema } from './schemas/user.schema';
import { DiseaseHistorySchema } from './schemas/disease-history.schema';
import { DiseaseHistoryController } from './controllers/disease-history.controller';
import { DiseaseHistoryService } from './services/disease-history.service';
import { ClinicalController } from './controllers/clinical.controller';
import { ClinicalService } from './services/clinical.service';
import { ClinicalSchema } from './schemas/clinical.schema';
import { MeasuresController } from './controllers/measures.controller';
import { MeasuresService } from './services/measures.service';
import { MeasureSchema } from './schemas/measure.schema';
import { PatientsController } from './controllers/patients.controller';
import { PatientsService } from './services/patients.service';
import { PatientSchema  } from './schemas/patient.schema';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/clinic'),
    MongooseModule.forFeature([
      { name: 'Rol', schema: RolSchema },
      { name: 'User', schema: UserSchema },
      { name: 'DiseaseHistory', schema: DiseaseHistorySchema },
      { name: 'Clinical', schema: ClinicalSchema },
      { name: 'Measure', schema: MeasureSchema },
      { name: 'Patient', schema: PatientSchema },
    ]),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController, RolesController, DiseaseHistoryController, ClinicalController, MeasuresController, PatientsController],
  providers: [AppService, UsersService, RolesService, DiseaseHistoryService, ClinicalService, MeasuresService, PatientsService],
})
export class AppModule {}
