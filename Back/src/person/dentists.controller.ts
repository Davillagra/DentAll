import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DentistsService } from './dentist.service';
import { CreateDentistDto } from './dtos/createDentist.dto';
import { PaginationDto } from 'src/common/dto/paginationDto';
import { LimitApiQueries, PageApiQueries } from 'src/config/swagger-config';
import { SpecialtyNameDto } from './dtos/dentSpecialty.dto';
import { DentalServNameDto } from './dtos/dentDentalServ.dto';
import { ArrayDentalServNameDto } from './dtos/dentDentalServArray.dto';

@ApiTags('Dentists')
@Controller('dentists')
export class DentistsController {
  constructor(private readonly dentistsService: DentistsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all dentists.' })
  @ApiResponse({
    status: 200,
    description: 'Returns the information of all dentists.',
  })
  @ApiQuery(PageApiQueries)
  @ApiQuery(LimitApiQueries)
  async getAllDentists(@Query() paginationDto: PaginationDto) {
    return this.dentistsService.getAllDentists(paginationDto)
  }

  @Get('best4')
  @ApiOperation({ summary: 'Get the four best rated dentists.' })
  @ApiResponse({
    status: 200,
    description: 'Returns the 4 best rated dentists.',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Bad request.' })
  async get4BestRateDentists() {
    return this.dentistsService.get4BestRateDentists();
  }

  @Get('byspecialty')
  @ApiOperation({ summary: 'Get dentists by specialty.' })
  @ApiResponse({
    status: 200,
    description: 'Returns all dentists with the specified specialty.',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Bad request.' })
  async dentistsBySpecialty(@Query() specialtyDto: SpecialtyNameDto) {
    return this.dentistsService.dentistsBySpecialty(specialtyDto.specialtyName)
  }

  @Get('bydentalserv')
  @ApiOperation({ summary: 'Get dentists by dental service.' })
  @ApiResponse({
    status: 200,
    description: 'Returns all dentists with the dental service name specified.',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Bad request.' })
  async dentistsByDentalServ(@Query() dentalServ: DentalServNameDto) {
    return this.dentistsService.dentistsByDentalServ(dentalServ.name)
  }

  @Get('person/:id')
  @ApiOperation({ summary: 'Get a dentist by person ID.' })
  @ApiResponse({
    status: 200,
    description: 'Returns to the dentist with the specified person ID.',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Bad request.' })
  async dentistByPersonId(@Param('id', ParseUUIDPipe) id: string) {
    return this.dentistsService.dentistByPersonId(id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a dentist by ID.' })
  @ApiResponse({
    status: 200,
    description: 'Returns to the dentist with the specified ID.',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Bad request.' })
  async dentistById(@Param('id', ParseUUIDPipe) id: string) {
    return this.dentistsService.dentistById(id);
  }

  @Post('create')
  @ApiOperation({ summary: 'Create a dentist.' })
  @ApiResponse({
    status: 201,
    description: 'Returns the information of the created dentist.',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Bad request.' })
  async createDentist(@Body() dentistInfo: CreateDentistDto) {
    return this.dentistsService.createDentist(dentistInfo);
  }

  @Patch('changestatus/:id')
  @ApiOperation({ summary: 'Enable o disable a dentist with the specific ID.'})
  @ApiResponse({ status: 201, description: 'Returns the dentist with the status changed.'})
  @ApiBadRequestResponse({ status: 400, description: 'Bad request.'})
  async changeDentistStatus(@Param('id', ParseUUIDPipe) id: string) {
    return this.dentistsService.changeDentistStatus(id);
  }

  @Patch('adddentalserv/:id')
  @ApiOperation({ summary: 'Add dental services to the dentist.'})
  @ApiResponse({ status: 201, description: 'Returns the dentist with the dental services added.'})
  @ApiBadRequestResponse({ status: 400, description: 'Bad request.'})
  async addDentalServ(@Param('id', ParseUUIDPipe) id: string, @Body() dentalServ: ArrayDentalServNameDto) {
    return this.dentistsService.addDentalServ(id, dentalServ.names);
  }
}
